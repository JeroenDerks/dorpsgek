import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { Section } from '../Section';
import { TownData } from '../../types';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Stack } from '@mui/system';

export const Review = ({ town }: { town: TownData }) => {
  const reviews = [
    {
      name: 'J.B.',
      stars: 4,
      review:
        'Heb em voor mn zoontje gekocht, hij is 14 en een maatje Small is perfect voor hem.'
    },
    {
      name: 'Mark van Heusden',
      stars: 5,
      review: `Ja lekker hoor! Toffe hoodie ${town.zipCodes[0]}!`
    }
  ];

  return (
    <Section bgVariant="grey">
      <Divider />
      <Typography variant="h3" textAlign="center" my={[4, 4, 10]}>
        AANBEVELINGEN
      </Typography>

      {reviews.map(({ review, name, stars }) => (
        <Box
          key={name}
          p={3}
          my={2}
          display="flex"
          style={{ background: 'white', borderRadius: '8px' }}
        >
          <Box
            width={100}
            height={100}
            style={{ border: '1px solid grey' }}
            mr={2}
            flexShrink={0}
          />

          <Stack>
            <Typography variant="h5" fontWeight={700}>
              {name}
            </Typography>
            <Box display="flex">
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              <StarIcon fontSize="small" />
              {stars === 4 ? (
                <StarHalfIcon fontSize="small" />
              ) : (
                <StarIcon fontSize="small" />
              )}
            </Box>
            <Typography variant="body1">{review}</Typography>
          </Stack>
        </Box>
      ))}
    </Section>
  );
};
