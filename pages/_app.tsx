import 'styles/reset.css'; // Обнуляем стили
import 'src/scss/index.scss'; //Коренной файл стилей (общий)
import { SnackbarProvider } from 'notistack';
import type { AppProps } from 'next/app';
import ChannelManager from '../src/contexts/ChannelManager';
import RadioPlayerManager from '../src/contexts/RadioPlayerManager';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={3} preventDuplicate>
        <ChannelManager>
          <RadioPlayerManager>
            <Component {...pageProps} />
          </RadioPlayerManager>
        </ChannelManager>
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default App;
