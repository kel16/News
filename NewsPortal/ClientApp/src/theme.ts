import { blueGrey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const baseTheme = createMuiTheme();

const theme = createMuiTheme({
  ...baseTheme,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          height: '100vh',
          width: '100vw',
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: baseTheme.spacing(1.5),
      },
    },
    MuiLink: {
      underlineHover: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#CFD8DC',
    },
    background: {
      default: blueGrey['100'],
    },
  },
});

export { theme };
