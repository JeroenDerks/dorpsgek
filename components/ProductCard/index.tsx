import { Box, Grid, Typography } from '@mui/material';
import { Color } from '../../types';
import { ClubColors } from '../ClubColors';

import { ProductCardDetails } from '../ProductCardDetails';
import ProductGallery from '../ProductGallery';

export const ProductCard = ({
  title,
  subTitle,
  colors,
  zipCode
}: ProductCardProps) => {
  return (
    <Grid container columnSpacing={4} my={6}>
      <Grid
        item
        xs={4}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Box>
          <Typography variant="h5" mb={2}>
            {title}
          </Typography>
          <ClubColors colors={colors} height={8} />
          <ProductCardDetails {...{ subTitle, zipCode }} />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box width={1} height={400} sx={{ background: 'white' }} p={1}>
          <ProductGallery />
        </Box>
      </Grid>
    </Grid>
  );
};

type ProductCardProps = {
  colors: Color[];
  title: string;
  subTitle?: string;
  zipCode: string;
};
