import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material';
import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material';

import { mapZipCodeToColor } from '../../../utils/zipcodeToColor';
import { TownData } from '../../../types';

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

  const zipCode = town.zipCodes[0];
  const starColor = zipCode === '4251' ? '#fff' : mapZipCodeToColor(zipCode);

  return (
    <Box>
      <Typography variant="h3" component="h1">
        {town.name.toUpperCase()} HOODIE
      </Typography>
      <Box display="flex" my={1}>
        <StarIcon sx={{ color: starColor }} />
        <StarIcon sx={{ color: starColor }} />
        <StarIcon sx={{ color: starColor }} />
        <StarIcon sx={{ color: starColor }} />
        <StarIcon sx={{ color: starColor }} />
      </Box>
      <Typography variant="h5" component="h1" fontStyle="italic" mb={2}>
        €54,95 <CrossedOutText>€79,95</CrossedOutText>
      </Typography>

      <List>
        {USPs.map((text, index) => (
          <ListItem disableGutters dense key={index}>
            <ListItemIcon>
              <Typography fontSize={24}>•</Typography>
            </ListItemIcon>
            <Typography fontSize={16}>{text}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
