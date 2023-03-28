import React from 'react';
import { mapZipCodeToColor } from '../../utils/zipcodeToColor';
import { Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material';

import { SupportedZipCodes } from '../../types';

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

const Banner = styled('div')<{ bg: string }>(({ bg }) => ({
  padding: '2px 0',
  textAlign: 'center',
  width: '100vw',
  backgroundColor: 'white'
}));

export const TownHeader = ({
  zipCode,
  hideFreeShippingBanner
}: {
  zipCode: SupportedZipCodes;
  hideFreeShippingBanner?: boolean;
}) => {
  const bg = mapZipCodeToColor(zipCode);

  return (
    <>
      {!hideFreeShippingBanner && (
        <Banner bg={bg}>
          <Typography
            fontWeight={700}
            variant="h5"
            fontSize={12}
            fontStyle="italic"
          >
            GRATIS VERZENDING
          </Typography>
        </Banner>
      )}
      <Container alignItems="center">
        <Line sx={{ backgroundColor: bg }} />
        <Box display="flex" alignItems="center" zIndex={2}>
          <img
            src={`/graphic/${zipCode}_graphic_lowres.png`}
            width="100px"
            height="26px"
            alt={`${zipCode} logo`}
          />
        </Box>
      </Container>
    </>
  );
};
