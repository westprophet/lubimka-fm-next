// @ts-ignore
import { startTransition, useState } from 'react';

export default function useHover() {
  const [hover, setHover] = useState(false);
  const onMouseOverHandler = () => startTransition(() => setHover(true));
  const onMouseLeaveHandler = () => startTransition(() => setHover(false));
  return {
    onMouseOverHandler,
    onMouseLeaveHandler,
    hover,
  };
}
