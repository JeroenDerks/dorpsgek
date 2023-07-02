import type { NextApiRequest, NextApiResponse } from 'next';
import Email from '../../components/Email/order-confirmation';
import { Resend } from 'resend';
import { format } from 'date-fns';

const resend = new Resend(process.env.RESEND_API_KEY);

const defaultValues = {
  customerName: 'Jeroen Derks',
  orderId: 'id_12345567',
  addressLine1: 'Brinkstraat 81',
  addressLine2: '',
  postalCode: '1611 WS',
  city: 'Bennekom',
  state: undefined,
  country: 'NL',
  townColor: '#e52424',
  townName: 'Bennekom',
  zipCode: '1611',
  size: 'M',
  price: '54.95',
  orderDate: format(new Date(), 'd MMMM yyyy HH:mm')
};

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET': {
      const data = await resend.sendEmail({
        from: 'info@mndorp.nl',
        to: 'jeroenderks88@gmail.com',
        subject: 'Order',
        react: <Email {...defaultValues} />
      });

      return res.status(200).send(data);
    }
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default send;
