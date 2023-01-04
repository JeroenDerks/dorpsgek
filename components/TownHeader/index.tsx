import { Typography, Stack, Box } from '@mui/material';
import React from 'react';
import { TownData } from '../../types';

export const TownHeader = ({ town }: { town: TownData }) => {
  const fontDefaults = {
    fontWeight: 900,
    fontStyle: 'italic',
    letterSpacing: '-0.075em'
  };

  return (
    <Stack alignItems="center">
      <Box display="flex" alignItems="center" mb={5}>
        <Typography
          variant="h1"
          fontSize={100}
          lineHeight={1}
          mr={3}
          {...fontDefaults}
        >
          {town.zipCodes[0]}
        </Typography>

        <Stack>
          <Typography variant="h2" fontSize={36} {...fontDefaults}>
            DORPSGEK
          </Typography>
          <Typography variant="h3" fontSize={36} {...fontDefaults}>
            {town.name.toUpperCase()}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
