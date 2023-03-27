import React from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { Box, MenuItem, Select, Typography } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { TownData } from '../../../types';
import { Stack } from '@mui/system';

const shirtSizes = [
  { label: 'Small', value: 's' },
  { label: 'Medium', value: 'm' },
  { label: 'Large', value: 'l' },
  { label: 'X-Large', value: 'xl' },
  { label: 'XX-Large', value: 'xxl' }
];

const pointsOfTrust = [
  { label: 'Gratis verzending', icon: LocalShippingOutlinedIcon },
  { label: 'Gemakkelijk retourneren', icon: AutorenewIcon },
  { label: 'Veilig betalen', icon: LockOutlinedIcon }
];
export const ProductPurchaseControl = ({ town }: { town: TownData }) => {
  const [size, setSize] = React.useState('');
  const [error, setError] = React.useState(null);
  const router = useRouter();

  const handleClick = async () => {
    if (!size) setError(true);
    else {
      const url = `/api/create-checkout-session`;

      const body = JSON.stringify({
        size,
        zipCode: town.zipCodes[0],
        name: town.name
      });

      const request = await fetch(url, {
        method: 'POST',
        body
      });
      console.log(request);
      const data = await request.json();
      console.log(data);

      if (data.url) {
        router.push(data.url);
      }
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
          size="large"
          onClick={handleClick}
          variant="outlined"
        >
          Koop
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={3}>
        {pointsOfTrust.map(({ label, icon }) => {
          const Icon = icon;

          return (
            <Stack alignItems="center" px={2} key={label}>
              <Icon sx={{ color: 'grey' }} />
              <Typography
                mt={1}
                fontSize={12}
                textAlign="center"
                sx={{ color: 'grey' }}
                lineHeight={1.2}
              >
                {label}
              </Typography>
            </Stack>
          );
        })}
      </Box>
    </Box>
  );
};
