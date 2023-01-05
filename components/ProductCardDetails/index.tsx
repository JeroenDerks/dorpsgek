import { Typography, List, ListItem, ListItemIcon } from '@mui/material';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export const ProductCardDetails = ({
  subTitle,
  zipCode
}: ProductCardDetailsProps) => {
  const USPs = [
    'Gemaakt van hoogwaardig katoen',
    `${zipCode} gedrukt op de borst`,
    'Logo gedrukt op de achterkant',
    'Kan in de machine gewassen worden'
  ];
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
      {USPs.map((text) => (
        <ListItem disableGutters>
          <ListItemIcon>
            <FiberManualRecordIcon />
          </ListItemIcon>
          <Typography variant="body1">{text}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

type ProductCardDetailsProps = {
  subTitle?: string;
  zipCode: string;
};
