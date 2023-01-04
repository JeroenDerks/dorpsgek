import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Select
} from '@mui/material';
import { Color } from '../../types';
import { ClubColors } from '../ClubColors';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ProductCardDetails } from '../ProductCardDetails';

export const ProductCard = ({ title, subTitle, colors }: ProductCardProps) => {
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
          <ProductCardDetails subTitle={subTitle} />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box width={1} height={400} sx={{ background: 'white' }} />
      </Grid>
    </Grid>
  );
};

type ProductCardProps = {
  colors: Color[];
  title: string;
  subTitle?: string;
};
