import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: blueGrey
  },
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      '"Helvetica"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

export const titleFont = {
  fontWeight: 900,
  fontStyle: 'italic',
  letterSpacing: '-0.05em'
};
