import { createTheme, PaletteColorOptions } from '@mui/material/styles';
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

const { augmentColor } = defaultTheme.palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

export const theme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    grey: '#eaeaec',
    black: createColor('#0b0a0e')
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

declare module '@mui/material/styles' {
  interface CustomPalette {
    black: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true;
  }
}

declare module '@mui/lab/LoadingButton' {
  interface ButtonPropsColorOverrides {
    black: true;
  }
}
