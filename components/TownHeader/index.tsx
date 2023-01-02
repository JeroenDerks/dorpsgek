import { Typography, Stack } from '@mui/material';
import React from 'react';
import { TownData } from '../../types';

export const TownHeader = ({ town }: { town: TownData }) => (
  <Stack alignItems="center" mb={5}>
    <Typography
      variant="h1"
      fontWeight={900}
      fontStyle="italic"
      fontSize={32}
      letterSpacing={-2}
      lineHeight={1}
    >
      DORPSGEK
    </Typography>
    <Typography
      variant="h2"
      fontWeight={900}
      fontStyle="italic"
      fontSize={140}
      letterSpacing={-10}
      lineHeight={1}
    >
      {town.zipCode}
    </Typography>
    <Typography
      variant="h3"
      fontWeight={900}
      fontStyle="italic"
      fontSize={32}
      letterSpacing={-2}
      lineHeight={1}
    >
      {town.name.toUpperCase()}
    </Typography>
  </Stack>
);
