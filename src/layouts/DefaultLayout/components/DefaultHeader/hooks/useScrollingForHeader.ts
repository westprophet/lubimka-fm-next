import { useCallback, useEffect, useState } from 'react';
import isFrontendEnvironment from '../../../../../utils/isFrontendEnvironment';

export default function useScrollingForHeader() {
  const [fixed, setFixed] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);

  const scrollHandler = useCallback(() => {
    const height = window.innerHeight;

    document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
  }, []);
  useEffect(() => {
    if (isFrontendEnvironment()) window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler, false);
    };
  }, [scrollHandler]);
  return {
    fixed,
  };
}
