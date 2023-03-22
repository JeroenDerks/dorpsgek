import React from 'react';
import Button from '@mui/material/Button';
import { Box, MenuItem, Select } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { TownData } from '../../../types';

const shirtSizes = [
  { label: 'Small', value: 's' },
  { label: 'Medium', value: 'm' },
  { label: 'Large', value: 'l' },
  { label: 'X-Large', value: 'xl' },
  { label: 'XX-Large', value: 'xxl' }
];

export const ProductPurchaseControl = ({ town }: { town: TownData }) => {
  const [size, setSize] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleClick = () => {
    if (!size) setError(true);
    else {
      console.log(
        'buy hoodie in size: ',
        size,
        ' for city: ',
        town.zipCodes[0]
      );
    }
  };

  return (
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
          {shirtSizes.map(({ label, value }) => (
            <MenuItem value={value} key={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>Wat is je maat?</FormHelperText>}
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
  );
};
