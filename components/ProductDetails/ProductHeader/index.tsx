import React from 'react';
import { mapZipCodeToColor } from '../../../utils/zipcodeToColor';
import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import { styled } from '@mui/material';

import { TownData } from '../../../types';

const ClubColorBar = styled('div')<{ bgColor: string }>(({ bgColor }) => ({
  borderRadius: 4,
  width: '100%',
  height: 8,
  backgroundColor: bgColor
}));

export const ProductHeader = ({ town }: { town: TownData }) => {
  const USPs = [
    'Gemaakt van hoogwaardig katoen',
    `${town.zipCodes[0]} gedrukt op de borst`,
    'Gelimiteerde oplage'
  ];

  const bgColor = mapZipCodeToColor(town.zipCodes[0]);

  return (
    <Box>
      <Typography variant="h3" mb={2} mt={[3, 3, 0]}>
        {town.name.toUpperCase()} HOODIE
      </Typography>
      <ClubColorBar {...{ bgColor }} />
      <List>
        {USPs.map((text, index) => (
          <ListItem disableGutters dense key={index}>
            <ListItemIcon>
              <Typography fontSize={24}>•</Typography>
            </ListItemIcon>
            <Typography>{text}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
