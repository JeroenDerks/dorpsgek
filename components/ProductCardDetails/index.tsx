import { Typography, List, ListItem, ListItemIcon } from '@mui/material';

export const ProductCardDetails = ({ zipCode }: ProductCardDetailsProps) => {
  const USPs = [
    'Gemaakt van hoogwaardig katoen',
    `${zipCode} gedrukt op de borst`,
    'Gelimiteerde oplage'
  ];

  return (
    <List>
      {USPs.map((text) => (
        <ListItem disableGutters dense>
          <ListItemIcon>
            <Typography fontSize={24}>•</Typography>
          </ListItemIcon>
          <Typography>{text}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

type ProductCardDetailsProps = {
  zipCode: string;
};
