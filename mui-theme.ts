import { createTheme } from '@mui/material';
import type {} from '@mui/lab/themeAugmentation';

//TODO: не рабоает расширение темы лабораторными компонентами
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
    primary: {
      main: '#99D3FB',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        disabled: {
          backgroundColor: '#4F4F4F',
          color: 'white',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: '#2B2C32',
          color: '#99D3FB',
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#99D3FB',
            },
          },
        },
        adornedEnd: {
          color: 'currentColor',
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

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'currentColor',
        },
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        disabled: {
          color: '#4F4F4F',
        },
      },
    },
  },
});
export default theme;
