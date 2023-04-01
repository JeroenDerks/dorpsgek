import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

let defaultTheme = createTheme({
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

export const theme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    grey: '#eaeaec'
  },
  typography: {
    ...defaultTheme.typography,
    body1: {
      fontFamily: "'Raleway'",
      fontSize: 18,
      lineHeight: 1.5
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      fontStyle: 'italic'
    },
    h5: {
      fontSize: 18
    }
  }
};

export const titleFont = {
  fontWeight: 900,
  fontStyle: 'italic',
  letterSpacing: '-0.05em'
};
