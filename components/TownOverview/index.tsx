import { Divider } from '@mui/material';
import React from 'react';
import { TownData } from '../../types';
import { ProductCard } from '../ProductCard';
import { PageLayout } from '../PageLayout';
import { TownHeader } from '../TownHeader';

export const TownOverview = ({ town }: { town: TownData }) => {
  return (
    <PageLayout>
      <TownHeader town={town} />
      <Divider />

      <ProductCard title="De klassieker" colors={[[255, 255, 255]]} />

      {town.sportClubs.map((club) => (
        <React.Fragment key={club.name}>
          <Divider />

          <ProductCard
            title={`De ${club.name} editie`}
            subTitle={`10% van de opbrengst komt ten goede aan ${club.type.toLowerCase()}vereniging ${
              club.name
            }`}
            colors={club.colors}
          />
        </React.Fragment>
      ))}
    </PageLayout>
  );
};
