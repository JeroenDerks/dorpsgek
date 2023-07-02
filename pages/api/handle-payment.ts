import Stripe from 'stripe';
import { buffer } from 'micro';
import { Resend } from 'resend';
import { format } from 'date-fns';
import type { NextApiRequest, NextApiResponse } from 'next';

import Email from '../../components/Email/order-confirmation';
import { createPrintOrder } from '../../utils/createPrintOrder';
import { ShirtSizes, SupportedZipCodes } from '../../types';
import { mapZipCodeToColor } from '../../utils/zipcodeToColor';

const resend = new Resend(process.env.RESEND_API_KEY);

export const config = { api: { bodyParser: false } };

const stripe =
  process.env.STRIPE_SECRET_KEY &&
  new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

export default async function wehhookHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

    let event;
    try {
      if (!stripe) throw new Error('Stripe not available');
      if (!sig || !webhookSecret)
        throw new Error('No signature or no webhook secret');

      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);

      if (!event) {
        throw new Error('Stripe checkout event not available');
      }
      if (
        event.type === 'checkout.session.completed' &&
        event.data.object.payment_status === 'paid'
      ) {
        const {
          shipping_details,
          metadata,
          payment_intent,
          customer_details,
          id
        } = event.data.object as Stripe.Checkout.Session;

        const name = metadata.name;
        const zipCode = metadata.zipCode as SupportedZipCodes;
        const size = metadata.size as ShirtSizes;
        const _id = typeof payment_intent === 'string' ? payment_intent : id;

        const townColor =
          zipCode === '4251' ? '#e52424' : mapZipCodeToColor(zipCode);

        const order = await createPrintOrder({
          id: _id,
          shipping_details,
          zipCode,
          size,
          customer_email: customer_details.email
        });

        if (!order) throw new Error('Error creating Gelato order');

        const emailData = await resend.sendEmail({
          from: 'mndorp <info@mndorp.nl>',
          to: customer_details.email,
          subject: 'Je bestelling is ontvangen',
          react: Email({
            customerName: shipping_details.name,
            orderId: _id,
            addressLine1: shipping_details?.address?.line1,
            addressLine2: shipping_details?.address?.line2,
            postalCode: shipping_details?.address?.postal_code,
            city: shipping_details?.address?.city,
            state: shipping_details?.address?.state,
            country: shipping_details?.address?.country,
            townColor,
            townName: name,
            zipCode,
            size,
            price: '54.95',
            orderDate: format(event.created * 1000, 'd MMMM yyyy HH:mm')
          })
        });

        if (!emailData) throw new Error('Error sending email');

        res.status(200).send({});
      }
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      return res.status(500).send(`Webhook error: ${JSON.stringify(message)}`);
    }
    res.status(200).send({});
  } else {
    res.status(405).end('Method Not Allowed');
  }
}
