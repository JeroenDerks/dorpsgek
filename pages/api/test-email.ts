import type { NextApiRequest, NextApiResponse } from 'next';
import Email from '../../components/Email/order-confirmation';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  console.log('test');

  switch (method) {
    case 'GET': {
      const data = await resend.sendEmail({
        from: 'info@mndorp.nl',
        to: 'jeroenderks88@gmail.com',
        subject: 'Order',
        react: Email()
      });

      return res.status(200).send(data);
    }
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default send;
