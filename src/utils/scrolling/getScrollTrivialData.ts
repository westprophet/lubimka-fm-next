//Получение простых данных

export default function getScrollTrivialData() {
  const height = window.innerHeight; //Видимый размер экрана пользователя
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const isScrollingWinHeight = scrollTop > height; //Проскролили размер экрана пользователя
  const isTop = scrollTop < 10;
  const isBottom = false; //TODO: Сделать проверку

  return {
    height,
    scrollTop,
    isScrollingWinHeight,
    isTop,
    isBottom,
  };
}
