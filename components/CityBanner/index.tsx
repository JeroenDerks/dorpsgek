import React from 'react';
import { styled } from '@mui/material';
import Image from 'next/image';
import { TownData } from '../../types';
import { Section } from '../Section';

const Container = styled('div')({
  width: '100vw',
  height: 240,
  overflow: 'hidden',
  zIndex: 0,
  position: 'relative',
  borderTop: '2px solid white'
});

export const CityBanner = ({ town }: { town: TownData }) => {
  return (
    <Container>
      <Section>
        <Image
          src={`/map/${town.zipCodes[0]}.png`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Section>
    </Container>
  );
};
