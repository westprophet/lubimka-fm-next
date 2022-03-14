import 'styles/reset.css'; // Обнуляем стили
import 'src/scss/index.scss'; //Коренной файл стилей (общий)
import { SnackbarProvider } from 'notistack';
import type { AppProps } from 'next/app';
import ChannelManager from '../src/contexts/ChannelManager';
import RadioPlayerManager from '../src/contexts/RadioPlayerManager';

function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3} preventDuplicate>
      <ChannelManager>
        <RadioPlayerManager>
          <Component {...pageProps} />
        </RadioPlayerManager>
      </ChannelManager>
    </SnackbarProvider>
  );
}

export default App;
