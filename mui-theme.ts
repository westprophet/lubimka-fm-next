import { createTheme } from '@mui/material';

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
  },
});
export default theme;
