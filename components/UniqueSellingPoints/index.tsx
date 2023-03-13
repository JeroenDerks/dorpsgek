import React from 'react';
import { Grid, styled, Typography } from '@mui/material';
import Image from 'next/image';
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
    <PageLayoutProduct>
      <Typography
        variant="h3"
        fontWeight={700}
        fontStyle="italic"
        textAlign="center"
        fontSize={24}
      >
        UIT LIEFDE VOOR MN DORP
      </Typography>
      <Grid container spacing={2} mt={5}>
        {usps.map(({ title, description }) => (
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h4" fontSize={20} fontWeight={700}>
              {title}
            </Typography>
            <Typography variant="body1">{description}</Typography>
          </Grid>
        ))}
      </Grid>
    </PageLayoutProduct>
  );
};
