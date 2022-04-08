import TScrollDirection from '../../types/TScrollDirection';

let lastScrollTop = 0; //Буфер для сохранения
//Получение направления движения
export default function getScrollDirection(): TScrollDirection {
  const top = window.pageYOffset;
  const temp = lastScrollTop;
  lastScrollTop = top;
  return temp >= top ? 'Up' : 'Down';
}
