import { useCallback, useEffect, useState } from 'react';
import isFrontendEnvironment from '../../../../../../../utils/isFrontendEnvironment';
import getScrollPercent from '../../../../../../../utils/getScrollPercent';

export default function useScrollPercentage(): number {
  const [percentage, setPercentage] = useState(0);

  const scrollHandler = useCallback(() => {
    const p = getScrollPercent();
    if (p) setPercentage(p);
  }, []);

  useEffect(() => {
    if (isFrontendEnvironment()) window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler, false);
    };
  }, [getScrollPercent, scrollHandler]);

  return percentage;
}
