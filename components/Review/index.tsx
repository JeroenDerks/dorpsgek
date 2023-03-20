import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { PageLayoutProduct } from '../PageLayout';
import { TownData } from '../../types';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

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
    <PageLayoutProduct bgVariant="grey">
      <Divider />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign="center" my={[4, 4, 10]}>
            AANBEVELINGEN
          </Typography>
        </Grid>
        {reviews.map(({ review, name, stars }) => (
          <Grid
            item
            container
            xs={12}
            padding={3}
            my={2}
            style={{ background: 'white', borderRadius: '8px' }}
          >
            <Grid item xs={4} sm={3} md={2}>
              <Box
                width={100}
                height={100}
                style={{ border: '1px solid grey' }}
              />
            </Grid>
            <Grid item xs={8} sm={9} md={10}>
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
            </Grid>
          </Grid>
        ))}
      </Grid>
    </PageLayoutProduct>
  );
};
