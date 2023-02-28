import React from 'react';
import Head from 'next/head';
import { Divider } from '@mui/material';
import { TownData } from '../../types';
import { ProductCard } from '../ProductCard';
import { PageLayoutProduct } from '../PageLayout';
import { TownHeader } from '../TownHeader';
// import TownHeader2 from '../TownHeader/TownHeader2';

export const TownOverview = ({ town }: { town: TownData }) => {
  return (
    <>
      <Head key="town">
        <title>{town.name} Dorpsgek</title>
        <meta name="description" content="Uit liefde voor mn dorp" />
      </Head>
      {/* <TownHeader2 zipCode={town.zipCodes[0]} townName={town.name} /> */}
      <PageLayoutProduct>
        <TownHeader town={town} />
        <Divider />
        <ProductCard
          zipCode={town.zipCodes[0]}
          colors={town.sportClubs[0].colors}
        />
      </PageLayoutProduct>
    </>
  );
};
