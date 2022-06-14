import type { AppProps } from 'next/app';
import { useState } from 'react';

import { SnackbarProvider } from 'notistack';
import RadioPlayerManager from '../src/contexts/RadioPlayerManager';
import theme from '../mui-theme';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ThemeProvider } from '@mui/material';
import 'moment/locale/ru';

import 'styles/reset.css'; // Обнуляем стили

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'src/scss/index.scss'; //Коренной файл стилей (общий)

import { CookiesProvider } from 'react-cookie';

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={3}
            preventDuplicate
            hideIconVariant={false}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <CookiesProvider>
              <RadioPlayerManager channels={pageProps.channels}>
                <Component {...pageProps} />
              </RadioPlayerManager>
            </CookiesProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
