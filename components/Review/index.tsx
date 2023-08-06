import React from 'react';
import { Stack } from '@mui/system';
import { Box, Divider, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import { Section } from '../Section';
import { ReviewImage } from './ReviewImage';
import { TownData } from '../../types';
import { reviews } from '../../utils/reviews';
import { Button } from '../Button';

export const Review = ({ town }: { town: TownData }) => {
  const [loading, setLoading] = React.useState(false);
  const zipCode = town.zipCodes[0];
  const townReviews = reviews[zipCode];
  const emailTo = town.name.toLowerCase() + '@mndorp.nl';

  const submitReview = () => {
    setLoading(true);
    window.location.href = `mailto:${emailTo}?subject=Review ${town.name} hoodie &body=Vermeld je naam, review, en aantal sterren (1-5 ⭐)`;

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Section bgVariant="grey">
      <Divider />
      <Typography variant="h3" textAlign="center" my={[4, 4, 10]}>
        AANBEVELINGEN
      </Typography>

      {townReviews.map(({ review, name, stars }) => (
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
              {stars === 4.5 && <StarHalfIcon fontSize="small" />}
              {stars === 5 && <StarIcon fontSize="small" />}
            </Box>
            <Typography variant="body1">{review}</Typography>
          </Stack>
        </Box>
      ))}
      <Box width="100%" display="flex" justifyContent="center" mt={[4, 6, 8]}>
        <Button {...{ loading }} onClick={submitReview}>
          Stuur jouw review
        </Button>
      </Box>
    </Section>
  );
};
