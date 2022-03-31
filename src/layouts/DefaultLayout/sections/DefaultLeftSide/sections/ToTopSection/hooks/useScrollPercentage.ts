import { useCallback, useEffect, useState } from 'react';
import isFrontendEnvironment from '../../../../../../../utils/isFrontendEnvironment';

export default function useScrollPercentage(): number {
  const [percentage, setPercentage] = useState(0);
  const getScrollPercent = useCallback(() => {
    const h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  }, []);

  const scrollHandler = useCallback(() => {
    const p = getScrollPercent();
    if (p) setPercentage(p);
  }, [getScrollPercent]);

  useEffect(() => {
    if (isFrontendEnvironment()) window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler, false);
    };
  }, [getScrollPercent, scrollHandler]);

  return percentage;
}
