import Stripe from 'stripe';
import { buffer } from 'micro';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createPrintOrder } from './../../utils/createPrintOrder';
import { ShirtSizes, SupportedZipCodes } from '../../types';

import { format } from 'date-fns';
import { mapZipCodeToColor } from '../../utils/zipcodeToColor';

const mail = require('@sendgrid/mail');

export const config = { api: { bodyParser: false } };

mail.setApiKey(process.env.SENDGRID_API_KEY);

const stripe =
  process.env.STRIPE_SECRET_KEY &&
  new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

export default async function wehhookHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST' || req.method === 'GET') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

    let event;
    try {
      if (!stripe) throw new Error('Stripe not available');
      if (!sig || !webhookSecret) return;

      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);

      if (!event) {
        throw new Error('Stripe checkout event not available');
      }
      if (
        event.type === 'checkout.session.completed' &&
        event.data.object.payment_status === 'paid'
      ) {
        console.log(event);
        const {
          shipping_details,
          metadata,
          customer_email,
          payment_intent,
          id
        } = event.data.object as Stripe.Checkout.Session;

        const name = metadata.name;
        const zipCode = metadata.zipCode as SupportedZipCodes;
        const size = metadata.size as ShirtSizes;
        const _id = typeof payment_intent === 'string' ? payment_intent : id;

        const order = await createPrintOrder({
          id: _id,
          shipping_details,
          zipCode,
          size,
          customer_email
        });

        console.info('order', order);

        const townColor =
          zipCode === '4251' ? '#e52424' : mapZipCodeToColor(zipCode);

        const message = {
          to: customer_email,
          bcc: 'info@mndorp.nl',
          from: { name: name, email: `info@mndorp.nl` },
          templateId: 'd-7b3ea18e8c51487fb7e83f8d58cb308d',
          replyTo: 'info@mndorp.nl',
          dynamicTemplateData: {
            name: shipping_details.name,
            orderDate: format(event.created * 1000, 'd MMMM yyyy HH:mm'),
            orderId: _id,
            addressLine1: shipping_details?.address?.line1,
            addressLine2: shipping_details?.address?.line2,
            postalCode: shipping_details?.address?.postal_code,
            city: shipping_details?.address?.city,
            state: shipping_details?.address?.state,
            country: shipping_details?.address?.country,
            townZipCode: zipCode,
            townColor,
            townName: name.toLowerCase(),
            orderData: { name: name, maat: size, price: '54,95' }
          }
        };

        await mail.send(message);
      }
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);

      return res.status(500).send(`Webhook error: ${message}`);
    }
    res.status(200).send({});
  } else {
    res.status(405).end('Method Not Allowed');
  }
}
