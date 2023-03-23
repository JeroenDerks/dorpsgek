import React from 'react';
import { mapZipCodeToColor } from '../../../utils/zipcodeToColor';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Typography
} from '@mui/material';
import { styled } from '@mui/material';

import { TownData } from '../../../types';

const ClubColorBar = styled('div')<{ town: TownData }>(({ town }) => ({
  borderRadius: 4,
  width: '100%',
  height: 8,
  backgroundColor: mapZipCodeToColor(town.zipCodes[0])
}));

const CrossedOutText = styled('span')({
  textDecoration: 'line-through',
  color: '#bcbcbc',
  marginLeft: 8
});

export const ProductHeader = ({ town }: { town: TownData }) => {
  const USPs = [
    'Gemaakt van hoogwaardig katoen',
    `${town.zipCodes[0]} gedrukt op de borst`,
    'Gelimiteerde oplage'
  ];

  return (
    <Box>
      <Divider sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} />
      {/* <ClubColorBar {...{ town }} /> */}
      <Typography variant="h3" component="h1" mt={3}>
        {town.name.toUpperCase()} HOODIE
      </Typography>
      <Typography variant="h5" component="h1" mb={3} mt={1} fontStyle="italic">
        Nu €54,95 <CrossedOutText>van €79,95</CrossedOutText>
      </Typography>
      <Divider />
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
