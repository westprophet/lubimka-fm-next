import 'styles/reset.css'; // Обнуляем стили
import 'src/scss/index.scss'; //Коренной файл стилей (общий)

import type { AppProps } from 'next/app';
import ChannelManager from '../src/contexts/ChannelManager';
import RadioPlayerManager from '../src/contexts/RadioPlayerManager';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChannelManager>
      <RadioPlayerManager>
        <Component {...pageProps} />
      </RadioPlayerManager>
    </ChannelManager>
  );
}

export default App;
