import React from 'react';
import { Box, Divider } from '@mui/material';

import { TownData } from '../../types';
import { ProductGallery } from '../ProductGallery';
import { Section } from '../Section';
import { ProductDetails } from '../ProductDetails';

export const Product = ({ town }: { town: TownData }) => {
  return (
    <Section>
      <Divider />
      <Box display={['block', 'block', 'flex']} py={6}>
        <Box width={['100%', '100%', '70%']} pr={[0, 0, 5]}>
          <Box width={1} sx={{ background: 'white' }} p={1}>
            <ProductGallery {...{ town }} />
          </Box>
        </Box>
        <ProductDetails {...{ town }} />
      </Box>
    </Section>
  );
};
