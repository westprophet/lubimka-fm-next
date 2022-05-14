import { createTheme } from '@mui/material';
import type {} from '@mui/lab/themeAugmentation';

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
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: '#2B2C32',
          color: '#99D3FB',
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
        // inputAdornedEnd: {
        //   color: 'currentcolor',
        // },
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
          // borderColor: '#4F4F4F',
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

    MuiButton: {
      styleOverrides: {
        outlined: {
          background: '#2B2C32',
          color: '#99D3FB',
          borderColor: 'transparent',
          '&:hover': {
            borderColor: '#99D3FB',
          },
        },
      },
    },
    // MuiInputLabel: {
    //   styleOverrides: {
    //     root: {
    //       color: 'currentColor',
    //     },
    //   },
    // },
    // MuiPaginationItem: {
    //   styleOverrides: {
    //     root: {
    //       color: 'currentcolor!important',
    //     },
    //   },
    // },

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
