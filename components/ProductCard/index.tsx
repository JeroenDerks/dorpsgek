import React from 'react';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import { Color } from '../../types';
import { ClubColors } from '../ClubColors';

import { ProductCardDetails } from '../ProductCardDetails';
import ProductGallery from '../ProductGallery';
import InputLabel from '@mui/material/InputLabel';

import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
const sizes = ['Small', 'Medium', 'Large', 'X-Large', 'XX-Lage'];

export const ProductCard = ({ colors, zipCode }: ProductCardProps) => {
  const [size, setSize] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleClick = () => {
    if (!size) setError(true);
  };

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
        <Box mt={[2, 3, 5]} mb={[4, 4, 0]} width={1}>
          <FormControl sx={{ width: '100%' }} error={error}>
            <InputLabel id="size-label">Maat</InputLabel>
            <Select
              fullWidth
              value={size}
              label="Maat"
              onChange={(e) => {
                setError(false);
                setSize(e.target.value);
              }}
            >
              {sizes.map((shirtSize) => (
                <MenuItem value={shirtSize} key={shirtSize}>
                  {shirtSize}
                </MenuItem>
              ))}
            </Select>
            {error && <FormHelperText>Kies eerst je maat</FormHelperText>}
          </FormControl>

          <Box mt={2}>
            <Button
              color="success"
              fullWidth
              onClick={handleClick}
              variant="outlined"
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
