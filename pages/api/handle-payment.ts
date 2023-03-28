import Stripe from 'stripe';
import { buffer } from 'micro';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createPrintOrder } from './../../utils/createPrintOrder';
import { ShirtSizes } from '../../types';

// import { format } from 'date-fns';

// const mail = require('@sendgrid/mail');

export const config = { api: { bodyParser: false } };

// mail.setApiKey(process.env.SENDGRID_API_KEY);

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
      console.log(event);

      if (!event) {
        throw new Error('Stripe checkout event not available');
      }
      if (
        event.type === 'checkout.session.completed' &&
        event.data.object.payment_status === 'paid'
      ) {
        const { id, shipping_details, metadata, customer_email } = event.data
          .object as Stripe.Checkout.Session;

        const order = await createPrintOrder({
          id,
          shipping_details,
          zipCode: metadata.zipCode,
          size: metadata.size as ShirtSizes,
          customer_email
        });

        console.info('order', order);

        // const message = {
        //   to: customer_details?.email,
        //   bcc: 'info@celebratecode.com',
        //   from: { name: 'Celebrate Code', email: 'info@celebratecode.com' },
        //   templateId: 'd-8ed3686528954bf4bd638d37dab43893',
        //   replyTo: 'info@celebratecode.com',
        //   dynamicTemplateData: {
        //     name: customer_details?.name,
        //     orderDate: format(event.created * 1000, 'd MMMM yyyy HH:mm'),
        //     orderId,
        //     addressLine1: shipping_details?.address?.line1,
        //     addressLine2: shipping_details?.address?.line2,
        //     postalCode: shipping_details?.address?.postal_code,
        //     city: shipping_details?.address?.city,
        //     state: shipping_details?.address?.state,
        //     country: shipping_details?.address?.country,
        //     orderData: items?.map((item) => JSON.parse(item))
        //   }
        // };

        // await mail.send(message);
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
