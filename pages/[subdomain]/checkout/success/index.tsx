import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { SupportedZipCodes, TownData } from '../../../../types';
import { Typography } from '@mui/material';
import { Section } from '../../../../components/Section';
import { TownHeader } from '../../../../components/TownHeader';
import { townData } from '../../../../data/townData';

export default function CheckoutSuccess() {
  const { query } = useRouter();

  const zipCode = query.zipcode;
  const town = townData.filter((town) => town.zipCodes[0] === zipCode)[0];

  console.log(town);

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
      <TownHeader
        zipCode={zipCode as SupportedZipCodes}
        hideFreeShippingBanner
      />
      <Section>
        <Typography variant="h3" mt={10}>
          Gefeliciteerd met je bestelling.
        </Typography>
        <Typography mt={3}>
          Jouw bestelling is ontvangen en je {town?.name} hoodie is zsm naar je
          onderweg
        </Typography>
      </Section>
    </>
  );
}
