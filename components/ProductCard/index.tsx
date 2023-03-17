import React from 'react';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import { Color } from '../../types';
import { ClubColors } from '../ClubColors';

import { ProductCardDetails } from '../ProductCardDetails';
import ProductGallery from '../ProductGallery';

const sizes = ['Small', 'Medium', 'Large', 'X-Large', 'XX-Lage'];

export const ProductCard = ({ colors, zipCode }: ProductCardProps) => {
  const [size, setSize] = React.useState('');

  return (
    <Box display={['block', 'block', 'flex']} py={6}>
      <Box width={['100%', '100%', '70%']} pr={[0, 0, 5]}>
        <Box width={1} sx={{ background: 'white' }} p={1}>
          <ProductGallery {...{ zipCode }} />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="stretch"
        width={['100%', '100%', '30%']}
      >
        <Box>
          <Typography variant="h3" mb={2} mt={[3, 3, 0]}>
            DE KLASSIEKER
          </Typography>
          <ClubColors colors={colors} height={8} />
          <ProductCardDetails {...{ zipCode }} />
        </Box>
        <Box mt={[2, 3, 5]} mb={[4, 4, 0]} display="flex" width={1}>
          <Select
            fullWidth
            size="small"
            placeholder="Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            {sizes.map((shirtSize) => (
              <MenuItem value={shirtSize} key={shirtSize}>
                {shirtSize}
              </MenuItem>
            ))}
          </Select>
          <Box ml={1}>
            <Button
              variant={!size ? 'outlined' : 'contained'}
              disabled={!size}
              sx={{ height: 40 }}
              color="success"
              disableElevation
            >
              Koop
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

type ProductCardProps = {
  colors: Color[];
  zipCode: string;
};
