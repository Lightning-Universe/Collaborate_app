import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
          primary: "#FFFFFF",
          secondary: "#EBEBEB",
          text: "#bfbfbf",
    },
    typography: {
        fontFamily: ["Roboto", "Roboto Mono"].join(','),
      },
  },
});

export default theme;
