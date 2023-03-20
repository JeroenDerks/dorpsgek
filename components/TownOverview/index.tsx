import React from 'react';
import Head from 'next/head';
import { Divider } from '@mui/material';
import { TownData } from '../../types';
import { ProductCard } from '../ProductCard';
import { PageLayoutProduct } from '../PageLayout';
import { TownHeader } from '../TownHeader';
import { CityBanner } from '../CityBanner';
import { UniqueSellingPoints } from '../UniqueSellingPoints';
import { FAQ } from '../FAQ';

export const TownOverview = ({ town }: { town: TownData }) => {
  return (
    <>
      <Head key={town.name}>
        <title>
          {town.zipCodes[0]} - Kleding voor {town.name}
        </title>
        <meta
          name="description"
          content="Uit liefde voor mn dorp. Want er is zoveel om trots op te zijn."
        />
      </Head>
      <PageLayoutProduct>
        <TownHeader town={town} />
        <Divider />
        <ProductCard
          zipCode={town.zipCodes[0]}
          colors={town.sportClubs[0].colors}
        />
      </PageLayoutProduct>
      <CityBanner zipCode={town.zipCodes[0]} />
      <UniqueSellingPoints population={town.population} />
      <PageLayoutProduct pb="0px">
        <Divider />
      </PageLayoutProduct>
      <FAQ town={town} />
    </>
  );
};
