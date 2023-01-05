import { Divider } from '@mui/material';
import React from 'react';
import { TownData } from '../../types';
import { ProductCard } from '../ProductCard';
import { PageLayoutProduct } from '../PageLayout';
import { TownHeader } from '../TownHeader';

export const TownOverview = ({ town }: { town: TownData }) => {
  return (
    <PageLayoutProduct>
      <TownHeader town={town} />
      <Divider />

      <ProductCard
        title="De klassieker"
        uniqueKey="klassieker"
        colors={[[255, 255, 255]]}
        zipCode={town.zipCodes[0]}
      />

      {town.sportClubs.map((club, index) => (
        <React.Fragment key={club.name}>
          <Divider />
          <ProductCard
            title="De voetbalclub editie"
            uniqueKey={'voetbal_' + index}
            zipCode={town.zipCodes[0]}
            subTitle={`10% van de opbrengst komt ten goede aan ${club.type.toLowerCase()}vereniging ${
              club.name
            }`}
            colors={club.colors}
          />
        </React.Fragment>
      ))}
    </PageLayoutProduct>
  );
};
