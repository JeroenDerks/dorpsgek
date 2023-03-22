import React from 'react';
import Head from 'next/head';

import { TownData } from '../../types';
import { Product } from '../Product';
import { TownHeader } from '../TownHeader';
import { CityBanner } from '../CityBanner';
import { UniqueSellingPoints } from '../UniqueSellingPoints';
import { FAQ } from '../FAQ';
import { Review } from '../Review';

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
      <TownHeader town={town} />
      <Product town={town} />
      <CityBanner town={town} />
      <UniqueSellingPoints town={town} />
      <FAQ town={town} />
      <Review town={town} />
    </>
  );
};
