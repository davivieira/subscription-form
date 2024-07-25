import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    alternate: Palette['primary'];
  }
  interface PaletteOptions {
    alternate?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#9BC73B',
    },
    secondary: {
      main: '#4B3B9B',
    },
    background: {
      default: '#F4F4F4',
    },
    text: {
      primary: '#333333',
    },
    warning: {
      main: '#F2E94E',
    },
    error: {
      main: '#E94E4E',
    },
    success: {
      main: '#7A9A2F',
    },
    alternate: {
      main: '#6EC1E4',
    },
  },
});