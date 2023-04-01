import React from 'react';
import { styled } from '@mui/material';

import { TownData } from '../../types';

const ImageContainer = styled('div')(({ theme }) => ({
  width: 100,
  height: 100,
  marginRight: 16,
  flexShrink: 0,
  border: '1px solid #eaeaec',
  overflow: 'hidden',
  borderRadius: 4,
  position: 'relative',

  [theme.breakpoints.up('sm')]: {
    marginRight: 24
  }
}));

const Image = styled('img')({
  width: 120,
  marginLeft: -10,
  marginTop: 24,
  height: 'auto',
  transform: 'rotate(-10deg)',
  opacity: 0.1
});

const Description = styled('p')({
  background: '#eaeaec',
  fontSize: 10,
  position: 'absolute',
  bottom: 0,
  width: 100,
  color: 'white',
  textAlign: 'center'
});

export const ReviewImage = ({ town }: { town: TownData }) => {
  return (
    <ImageContainer>
      <Image src={`/graphic/${town.zipCodes[0]}_graphic_lowres.png`} />
      <Description>Geen afbeelding</Description>
    </ImageContainer>
  );
};
