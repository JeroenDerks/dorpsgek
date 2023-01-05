import { Typography, Stack, Box } from '@mui/material';
import React from 'react';
import { TownData } from '../../types';
import { titleFont } from '../../theme';

export const TownHeader = ({ town }: { town: TownData }) => {
  return (
    <Stack alignItems="center">
      <Box display="flex" alignItems="center" mb={5}>
        <Typography
          variant="h1"
          fontSize={100}
          lineHeight={1}
          mr={3}
          {...titleFont}
        >
          {town.zipCodes[0]}
        </Typography>

        <Stack>
          <Typography variant="h2" fontSize={36} {...titleFont}>
            DORPSGEK
          </Typography>
          <Typography variant="h3" fontSize={36} {...titleFont}>
            {town?.name?.toUpperCase()}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
