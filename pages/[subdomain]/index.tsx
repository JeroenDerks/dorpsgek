import React from 'react';
import Head from 'next/head';

import { TownData } from '../../types';
import { Product } from '../../components/Product';
import { TownHeader } from '../../components/TownHeader';
import { CityBanner } from '../../components/CityBanner';
import { UniqueSellingPoints } from '../../components/UniqueSellingPoints';
import { FAQ } from '../../components/FAQ';
import { Review } from '../../components/Review';

import { chosenVillages } from '../../data/chosenVillages';
import { townData } from '../../data/townData';

export default function Town({ town }: { town: TownData }) {
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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/favicon/${town.zipCodes[0]}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon/${town.zipCodes[0]}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon/${town.zipCodes[0]}/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`/favicon/${town.zipCodes[0]}/site.webmanifest`}
        />
      </Head>
      <TownHeader zipCode={town.zipCodes[0]} />
      <Product town={town} />
      <CityBanner town={town} />
      <UniqueSellingPoints town={town} />
      <FAQ town={town} />
      <Review town={town} />
    </>
  );
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const selectedTowns = townData.filter((town) =>
    chosenVillages.includes(town.zipCodes[0])
  );
  const paths = selectedTowns.map(({ name }) => {
    return {
      params: { subdomain: name.toLowerCase() }
    };
  });
  return {
    paths,
    fallback: false // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const town = townData.filter(
    (town) => town.name.toLowerCase() === params.subdomain
  );

  return {
    props: { town: town[0] } // will be passed to the page component as props
  };
}
