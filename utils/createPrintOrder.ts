import Stripe from 'stripe';
import { ShirtSizes } from '../types';

const returnAddress = {
  companyName: 'JD IT',
  addressLine1: 'van Beuningenstraat 156H',
  addressLine2: '',
  city: 'Amsterdam',
  postCode: '1051 XW',
  country: 'NL',
  email: 'jeroenderks88@gmail.com',
  phone: '+31623686529'
};

export const createPrintOrder = async ({
  customer_email,
  id,
  shipping_details,
  size,
  zipCode
}: {
  customer_email: string;
  id: string;
  shipping_details: Stripe.Checkout.Session.ShippingDetails;
  size: ShirtSizes;
  zipCode: string;
}) => {
  const fullName = shipping_details.name;
  const firstName = fullName[0];
  const lastName = fullName[fullName.length - 1];

  const shippingAddress = {
    firstName,
    lastName,
    addressLine1: shipping_details.address.line1,
    addressLine2: shipping_details.address.line2,
    city: shipping_details.address.city,
    postCode: shipping_details.address.postal_code,
    country: shipping_details.address.country,
    email: customer_email
  };

  const testObject = {
    orderType: 'draft',
    orderReferenceId: id,
    customerReferenceId: '1611_5678',
    currency: 'EUR',
    items: [
      {
        itemReferenceId: '1611_9999',
        productUid: `apparel_product_gca_hoodie_gsc_pullover_gcu_unisex_gqa_classic_gsi_${size}_gco_black_gpr_4-0`,
        files: [
          {
            type: 'default',
            url: `https://www.mndorp.nl/shirtgraphics/${zipCode}_print.png`
          }
        ],
        quantity: 1
      }
    ],
    shipmentMethodUid: 'express',
    shippingAddress,
    returnAddress
  };

  console.log(process.env.GELATO_API_KEY);

  const response = await fetch('https://order.gelatoapis.com/v4/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.GELATO_API_KEY
    },
    body: JSON.stringify(testObject)
  });

  console.log(response);
  const data = response.json();

  return data;
};
