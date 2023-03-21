import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Section } from '../Section';
import { TownData } from '../../types';
import { Box } from '@mui/system';

export const UniqueSellingPoints = ({ town }: { town: TownData }) => {
  const usps = [
    {
      title: `${town.population} inwoners`,
      description:
        'En ook nog een voetbal club die regelmatig de drie punten pakt.'
    },
    {
      title: 'Ons kent ons',
      description:
        'Een hechte gemeenschap waar we niemand buiten de boot laten vallen.'
    },
    {
      title: 'Levensgeluk',
      description:
        'We doen ons best, nemen het niet zo serieus, en leven langer en gelukkiger. '
    }
  ];
  return (
    <Section bgVariant="grey">
      <Box p={[2, 2, 3]} sx={{ backgroundColor: 'white', borderRadius: '4px' }}>
        <Typography variant="h3" textAlign="center" pt={2}>
          ZOVEEL OM TROTS OP TE ZIJN
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
    </Section>
  );
};
