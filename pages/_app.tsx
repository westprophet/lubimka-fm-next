import type { AppProps } from 'next/app';
import React, { useState } from 'react';

import { SnackbarProvider } from 'notistack';
import RadioPlayerManager from '../src/contexts/RadioPlayerManager';
import theme from '../mui-theme';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ThemeProvider } from '@mui/material';
import 'styles/reset.css'; // Обнуляем стили
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'src/scss/index.scss'; //Коренной файл стилей (общий)
import 'moment/locale/ru';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

import { CookiesProvider } from 'react-cookie';

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo {...SEO} />
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <CookiesProvider>
            <SnackbarProvider
              maxSnack={3}
              preventDuplicate
              hideIconVariant={false}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <RadioPlayerManager channels={pageProps.channels}>
                <Component {...pageProps} />
              </RadioPlayerManager>
            </SnackbarProvider>
          </CookiesProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
