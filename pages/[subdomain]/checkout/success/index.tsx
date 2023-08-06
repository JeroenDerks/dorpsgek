import React from 'react';
import Head from 'next/head';
import { Typography, Box, styled } from '@mui/material';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';

import { SupportedZipCodes } from '../../../../types';
import { Section } from '../../../../components/Section';
import { TownHeader } from '../../../../components/TownHeader';
import { townData } from '../../../../data/townData';
import { formatOrderId } from '../../../../utils/formatOrderId';

const ImageContainer = styled('div')({
  width: '100vw',
  height: 600,
  minHeight: '100%',
  zIndex: 0,
  borderTop: '2px solid white',
  position: 'relative',
  overflow: 'hidden'
});

const ProductImageContainer = styled('div')({
  width: '100%',
  minHeight: 440,
  maxHeight: 440,
  background: '#f0f0f0',
  position: 'relative',
  overflow: 'hidden',
  maxWidth: 600,
  marginTop: -80,
  marginBottom: -360,
  zIndex: 1,
  border: '2px solid white'
});

export default function CheckoutSuccess() {
  const [orderId, setOrderId] = React.useState();
  const { query } = useRouter();

  const zipCode = query.zipcode;
  const town = townData.filter((town) => town.zipCodes[0] === zipCode)[0];

  React.useEffect(() => {
    const getOrderId = async () => {
      const req = await fetch(`/api/get-order-id/`, {
        method: 'POST',
        body: JSON.stringify({ session_id: query.session_id })
      });

      if (req.ok) {
        const data = await req.json();
        if (data.orderId) {
          setOrderId(data.orderId);
        }
      }
    };
    getOrderId();
  }, [query.session_id]);

  return (
    <>
      <Head key={town?.name}>
        <title>
          {zipCode} - Kleding voor {town?.name}
        </title>
        <meta
          name="description"
          content="Uit liefde voor mn dorp. Want er is zoveel om trots op te zijn."
        />
      </Head>
      {zipCode && town && (
        <TownHeader
          zipCode={zipCode as SupportedZipCodes}
          hideFreeShippingBanner
        />
      )}
      <Section>
        <Box my={10} px={3}>
          <Typography variant="h3">Gefeliciteerd met je bestelling.</Typography>
          <Typography mt={3}>
            Jouw bestelling is ontvangen en je {town?.name} hoodie is zsm naar
            je onderweg
          </Typography>
          <Typography mt={3} fontSize={14}>
            Order datum: {format(new Date(), 'd MMMM')}
          </Typography>

          {orderId && (
            <Typography fontSize={14}>
              Order ID: {formatOrderId(orderId)}
            </Typography>
          )}
        </Box>
      </Section>
      {zipCode && town.name && (
        <>
          <Box display="flex" justifyContent="center" px={3}>
            <ProductImageContainer>
              <Image
                src={`/product/${zipCode}_model.jpg`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt={`${town?.name} hoodie product `}
              />
            </ProductImageContainer>
          </Box>
          <ImageContainer>
            <Image
              src={`/map/${zipCode}.png`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt={`map for ${town?.name}`}
            />
          </ImageContainer>
        </>
      )}
    </>
  );
}
