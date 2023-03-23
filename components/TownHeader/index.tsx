import React from 'react';
import { mapZipCodeToColor } from '../../utils/zipcodeToColor';
import { Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material';

import { TownData } from '../../types';

const Container = styled(Stack)({
  background: '#0b0a0e',
  position: 'relative',
  padding: '8px 0',
  borderBottom: '2px solid white'
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

const Image = styled('img')({
  width: '100px',
  margin: '0 16px'
});

const Banner = styled('div')<{ bg: string }>(({ bg }) => ({
  padding: '2px 0',
  textAlign: 'center',
  width: '100vw',
  backgroundColor: 'white'
}));

export const TownHeader = ({ town }: { town: TownData }) => {
  return (
    <>
      <Banner bg={mapZipCodeToColor(town.zipCodes[0])}>
        <Typography
          fontWeight={700}
          variant="h5"
          fontSize={12}
          fontStyle="italic"
        >
          GRATIS VERZENDING
        </Typography>
      </Banner>
      <Container alignItems="center">
        <Line sx={{ backgroundColor: mapZipCodeToColor(town.zipCodes[0]) }} />
        <Box display="flex" alignItems="center" zIndex={2}>
          <Image src={`/graphic/${town.zipCodes[0]}_graphic_lowres.png`} />
        </Box>
      </Container>
    </>
  );
};
