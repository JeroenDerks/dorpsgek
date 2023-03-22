import React from 'react';
import { Box } from '@mui/material';

import { TownData } from '../../types';
import { ProductHeader } from './ProductHeader';
import { ProductPurchaseControl } from './ProductPurchaseControl';

export const ProductDetails = ({ town }: { town: TownData }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="stretch"
      width={['100%', '100%', '30%']}
    >
      <ProductHeader {...{ town }} />
      <ProductPurchaseControl {...{ town }} />
    </Box>
  );
};
