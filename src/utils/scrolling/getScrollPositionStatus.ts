import getScrollTrivialData from './getScrollTrivialData';
import TScrollPosition from '../../types/TScrollPosition';

//Получаем позицию скролла
export default function getScrollPositionStatus(): null | TScrollPosition {
  const { isScrollingWinHeight, isTop, isBottom } = getScrollTrivialData();
  let pos: null | TScrollPosition = null;
  if (isTop) pos = 'top';
  else if (isBottom) pos = 'bottom';
  else if (!isScrollingWinHeight) pos = 'pre-top';
  else if (isScrollingWinHeight) pos = 'post-top';
  return pos;
}
