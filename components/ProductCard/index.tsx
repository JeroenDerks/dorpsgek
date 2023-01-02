import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon
} from '@mui/material';
import { Color } from '../../types';
import { ClubColors } from '../ClubColors';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const ProductCard = ({ title, subTitle, colors }: ProductCardProps) => {
  return (
    <Grid container columnSpacing={2} my={6}>
      <Grid item xs={4}>
        <Typography variant="h5" mb={2}>
          {title}
        </Typography>
        <ClubColors colors={colors} height={8} />

        <List>
          {subTitle && (
            <ListItem disableGutters>
              <ListItemIcon sx={{ width: 8 }}>
                <FiberManualRecordIcon />
              </ListItemIcon>
              <Typography variant="body1">{subTitle}</Typography>
            </ListItem>
          )}
          <ListItem disableGutters>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <Typography variant="body1">
              Gemaakt van hoogwaardig katoen
            </Typography>
          </ListItem>
        </List>
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
