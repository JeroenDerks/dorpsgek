import { Typography, List, ListItem, ListItemIcon } from '@mui/material';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const ProductCardDetails = ({ subTitle }: ProductCardDetailsProps) => {
  return (
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
        <Typography variant="body1">Gemaakt van hoogwaardig katoen</Typography>
      </ListItem>
    </List>
  );
};

type ProductCardDetailsProps = {
  subTitle?: string;
};
