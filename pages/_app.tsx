import 'styles/reset.css'; // Обнуляем стили
import 'src/scss/index.scss'; //Коренной файл стилей (общий)

import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
