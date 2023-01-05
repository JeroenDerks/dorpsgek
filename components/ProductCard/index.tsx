import React from 'react';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import { Color } from '../../types';
import { ClubColors } from '../ClubColors';

import { ProductCardDetails } from '../ProductCardDetails';
import ProductGallery from '../ProductGallery';

const sizes = ['Small', 'Medium', 'Large', 'X-Large', 'XX-Lage'];
export const ProductCard = ({
  colors,
  subTitle,
  title,
  uniqueKey,
  zipCode
}: ProductCardProps) => {
  const [size, setSize] = React.useState('');

  return (
    <Box display={['block', 'block', 'flex']} py={6}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Box>
          <Typography variant="h5" mb={2} fontWeight={900} fontStyle="italic">
            {title.toUpperCase()}
          </Typography>
          <ClubColors colors={colors} height={8} />
          <ProductCardDetails {...{ subTitle, zipCode }} />
        </Box>
        <Box mt={5} display="flex" width={1}>
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
          <Box ml={2}>
            <Button
              variant={!size ? 'outlined' : 'contained'}
              disabled={!size}
              sx={{ height: 40 }}
              color="success"
            >
              Koop
            </Button>
          </Box>
        </Box>
      </Box>
      <Box width={['100%', '100%', '70%']} pl={[0, 0, 5]}>
        <Box width={1} sx={{ background: 'white' }} p={1}>
          <ProductGallery id={uniqueKey} zipCode={zipCode} />
        </Box>
      </Box>
    </Box>
  );
};

type ProductCardProps = {
  colors: Color[];
  title: string;
  subTitle?: string;
  zipCode: string;
  uniqueKey: string;
};
