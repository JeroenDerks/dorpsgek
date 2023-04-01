import React from 'react';
import { Stack } from '@mui/system';
import { Box, Divider, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import { Section } from '../Section';
import { ReviewImage } from './ReviewImage';
import { TownData } from '../../types';

export const Review = ({ town }: { town: TownData }) => {
  const reviews = [
    {
      name: 'J.B.',
      stars: 4,
      review:
        'Heb em voor mn zoontje gekocht, hij is 14 en een maatje Small is perfect voor hem.'
    },
    {
      name: 'Mark van Leusden',
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
          <ReviewImage town={town} />
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
