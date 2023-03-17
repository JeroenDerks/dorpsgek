import React from 'react';
import { Grid, Typography } from '@mui/material';
import { PageLayoutProduct } from '../PageLayout';
import { Box } from '@mui/system';

const usps = [
  {
    title: 'Your title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Some heading',
    description:
      ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    title: 'Your title',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
  }
];

export const UniqueSellingPoints = () => {
  return (
    <PageLayoutProduct bgVariant="grey">
      <Box p={[2, 2, 3]} sx={{ backgroundColor: 'white', borderRadius: '4px' }}>
        <Typography variant="h3" textAlign="center" pt={3}>
          OM TROTS OP TE ZIJN
        </Typography>
        <Grid container spacing={4} mt={[2, 2, 4]}>
          {usps.map(({ title, description }) => (
            <Grid item xs={12} sm={12} md={4}>
              <Typography variant="h5" fontWeight={700}>
                {title}
              </Typography>
              <Typography variant="body1">{description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageLayoutProduct>
  );
};
