import React from 'react';
import { styled } from '@mui/material';
import Image from 'next/image';
import { PageLayoutProduct } from '../PageLayout';

const Container = styled('div')({
  width: '100vw',
  height: 220,
  overflow: 'hidden',
  zIndex: 0,
  position: 'relative',
  borderTop: '2px solid white'
});

export const CityBanner = ({ zipCode }: { zipCode }) => {
  return (
    <Container>
      <PageLayoutProduct>
        <Image
          src={`/map/${zipCode}.png`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </PageLayoutProduct>
    </Container>
  );
};
