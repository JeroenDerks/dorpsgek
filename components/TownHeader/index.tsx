import React from 'react';
import { mapZipCodeToColor } from '../../utils/zipcodeToColor';
import { Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material';

import { TownData } from '../../types';

const Container = styled(Stack)({
  background: '#0b0a0e',
  position: 'relative'
});

const Line = styled('div')({
  height: 2,
  borderRadius: 4,
  width: '100%',
  position: 'relative',
  top: 16,
  zIndex: 1,
  maxWidth: 1200
});

const ZipcodeTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontStyle: 'italic',
  fontSize: 24,
  margin: '0 16px',
  lineHeight: 1,
  color: 'white',

  [theme.breakpoints.up('sm')]: {
    fontSize: 28
  }
}));

export const TownHeader = ({ town }: { town: TownData }) => {
  return (
    <Container alignItems="center">
      <Line sx={{ backgroundColor: mapZipCodeToColor(town.zipCodes[0]) }} />
      <Box display="flex" alignItems="center" zIndex={2}>
        <ZipcodeTitle variant="h1">{town.zipCodes[0]}</ZipcodeTitle>
        <ZipcodeTitle variant="h1">{town.zipCodes[0]}</ZipcodeTitle>
        <ZipcodeTitle variant="h1">{town.zipCodes[0]}</ZipcodeTitle>
      </Box>
    </Container>
  );
};
