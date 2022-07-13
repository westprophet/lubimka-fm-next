import { createTheme } from '@mui/material';
import type {} from '@mui/lab/themeAugmentation';

// let theme: Theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'Roboto',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
    ].join(','),
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#99D3FB',
      light: '#99D3FB',
      dark: '#99D3FB',
    },
    secondary: {
      main: '#256BFE',
      light: '#256BFE',
      dark: '#256BFE',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: '#2B2C32',
          color: '#99D3FB',
          input: {
            padding: '12.5px 14px',
          },
          '& .MuiInputAdornment-root': {
            '& .MuiButtonBase-root': {
              color: '#99D3FB',
            },
          },

          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#99D3FB',
            },
          },
        },

        adornedEnd: {
          color: 'currentcolor',
        },
        adornedStart: {
          color: '#99D3FB',
        },
        input: {
          color: '#99D3FB',
        },
        notchedOutline: {
          color: '#4F4F4F',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#4F4F4F',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: 'currentcolor',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '12px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '14px',
        },
        outlined: {
          color: '#99D3FB',
          borderColor: '#99D3FB',

          '&:hover': {
            borderColor: '#99D3FB',
          },
        },
      },
    },
    // @ts-ignore
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: '#2B2C32',
          },
        },
        loadingIndicator: {
          color: '#99D3FB',
        },
      },
      variant: {},
      defaultProps: {
        variant: 'text',
      },
    },
  },
});
export default theme;
