import { useCallback, useEffect, useMemo, useState } from 'react';
import getWheelDirection from 'src/utils/scrolling/getWheelDirection';
import isFrontendEnvironment from '../../../utils/isFrontendEnvironment';
import TScrollPosition from '../../../types/TScrollPosition';
import getScrollPositionStatus from '../../../utils/scrolling/getScrollPositionStatus';
import TScrollDirection from '../../../types/TScrollDirection';

export default function useScrolling() {
  const [position, setPosition] = useState<TScrollPosition>('top');
  const [direction, setDirection] = useState<TScrollDirection>('Up');

  //Слушатель для прокрутки страницы
  const scrollHandler = useCallback((event: Event) => {
    const status = getScrollPositionStatus();
    if (status) setPosition(status);
  }, []);

  //Слушатель для прокрутки колесика (получаем направление)
  const wheelHandler = useCallback((event: Event) => {
    const wheel_data = getWheelDirection(event);
    setDirection(wheel_data);
  }, []);

  useEffect(() => {
    if (isFrontendEnvironment()) {
      window.addEventListener('scroll', scrollHandler);
      window.addEventListener('wheel', wheelHandler);
    }
    return () => {
      window.removeEventListener('scroll', scrollHandler, false);
      window.removeEventListener('wheel', wheelHandler, false);
    };
  }, [scrollHandler, wheelHandler]);

  return useMemo(() => {
    return {
      position,
      direction,
    };
  }, [position, direction]);
}
