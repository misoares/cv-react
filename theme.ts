import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { ResponsiveFontSizesOptions } from '@material-ui/core/styles/responsiveFontSizes';

// Create a theme instance.
const themeStyle = {
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Raleway',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 18,
  },
};

const options: ResponsiveFontSizesOptions = {
  factor: 3,
  breakpoints: ["xs",'sm', 'md', 'lg',"xl"],
}
const theme = responsiveFontSizes(createMuiTheme(themeStyle), options);

export default theme;