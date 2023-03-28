import Stripe from 'stripe';
import type { NextApiRequest, NextApiResponse } from 'next';

const stripe =
  process.env.STRIPE_SECRET_KEY &&
  new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      if (!stripe) throw new Error('Stripe not available');

      const { size, zipCode, name } = JSON.parse(req.body);

      const item = {
        quantity: 1,
        price_data: {
          product_data: {
            name: `${name} hoodie (${zipCode}) in maat ${size.toUpperCase()}`,
            images: [
              `https://mndorp.nl/product/${zipCode}_model.jpg`,
              `https://mndorp.nl/product/${zipCode}_closeup.jpg`
            ]
          },
          unit_amount: 54.95 * 100,
          currency: 'eur'
        }
      };

      const session = await stripe.checkout.sessions.create({
        line_items: [item],
        payment_method_types: ['ideal', 'card'],
        shipping_address_collection: { allowed_countries: ['NL', 'BE', 'DE'] },
        tax_id_collection: { enabled: true },
        metadata: { size, zipCode },
        mode: 'payment',
        locale: 'nl',
        success_url: `${req.headers.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}&zipcode=${zipCode}&size=${size}`,
        cancel_url: `${req.headers.referer}`
      });

      res.status(200).send({ url: session.url });
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof Error) {
        return res.status(500).json(err.message);
      } else res.status(500).json('Unknown error');
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
