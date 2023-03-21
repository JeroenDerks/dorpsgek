import React from 'react';
import { styled } from '@mui/material';
import Image from 'next/image';
import { Section } from '../Section';

const Container = styled('div')({
  width: '100vw',
  height: 240,
  overflow: 'hidden',
  zIndex: 0,
  position: 'relative',
  borderTop: '2px solid white'
});

export const CityBanner = ({ zipCode }: { zipCode }) => {
  return (
    <Container>
      <Section>
        <Image
          src={`/map/${zipCode}.png`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Section>
    </Container>
  );
};
