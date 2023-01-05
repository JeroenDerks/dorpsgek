import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: blueGrey
  }
});

export const titleFont = {
  fontWeight: 900,
  fontStyle: 'italic',
  letterSpacing: '-0.07em'
};
