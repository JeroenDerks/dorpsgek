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
    {
      title: 'Het beste dorp',
      description:
        'We hebben een mooi dorp en met deze hoodie wordt het nog een stukje beter.'
    },
    {
      title: 'Een goed leven',
      description:
        'Met de mensen die hier wonen, heb je alles wat je nodig hebt'
    }
  ];
  const features = [
    'Gemaakt van hoogwaardig katoen',
    `${town.zipCodes[0]} gedrukt op de borst`,
    'Gelimiteerde oplage'
  ];

  const zipCode = town.zipCodes[0];
  const starColor = zipCode === '4251' ? '#e52424' : mapZipCodeToColor(zipCode);

  return (
    <Box>
      <Typography variant="h3" component="h1" mt={[3, 3, 0]}>
        {town.name.toUpperCase()} HOODIE
      </Typography>
      <Box display="flex" my={1}>
        <StarIcon sx={{ color: starColor }} />
        <StarIcon sx={{ color: starColor }} />
        <StarIcon sx={{ color: starColor }} />
        <StarIcon sx={{ color: starColor }} />
        <StarIcon sx={{ color: starColor }} />
      </Box>
      <Typography
        variant="h3"
        component="h2"
        fontStyle="italic"
        mb={[3, 3, 5]}
        fontSize={22}
      >
        €54,95 <CrossedOutText>€79,95</CrossedOutText>
      </Typography>

      {USPs.map(({ title, description }) => (
        <React.Fragment key={title}>
          <Typography variant="h3" fontStyle="normal" fontSize={18} mt={3}>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </React.Fragment>
      ))}

      <List sx={{ padding: 0, marginTop: 3, marginBottom: 3 }}>
        {features.map((text, index) => (
          <ListItem disableGutters dense key={index} sx={{ padding: 0 }}>
            <ListItemIcon sx={{ minWidth: 24 }}>
              <Typography fontSize={24} lineHeight={1}>
                •
              </Typography>
            </ListItemIcon>
            <Typography>{text}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
