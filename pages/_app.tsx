import 'styles/reset.css'; // Обнуляем стили
import 'src/scss/index.scss'; //Коренной файл стилей (общий)

import type { AppProps } from 'next/app';
import ChannelManager from '../src/contexts/ChannelManager';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChannelManager>
      <Component {...pageProps} />
    </ChannelManager>
  );
}

export default App;
