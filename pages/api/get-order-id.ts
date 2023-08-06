import Stripe from 'stripe';
import type { NextApiRequest, NextApiResponse } from 'next';

const stripe =
  process.env.STRIPE_SECRET_KEY &&
  new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

export default async function wehhookHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { session_id } = JSON.parse(req.body);

      if (!session_id) throw new Error('No session ID');
      const session = await stripe.checkout.sessions.retrieve(session_id);

      if (!session || !session.payment_intent) throw new Error('No order ID');

      if (session.payment_intent) {
        res.status(200).send({ orderId: session.payment_intent });
      }
    } catch (err) {
      res.status(200).send({ message: err.message });
    }
  } else {
    res.status(405).end('Method Not Allowed');
  }
}
