import IScrollingManagerValues from '../types/IScrollingManagerValues';
import useScrolling from '../../../layouts/DefaultLayout/hooks/useScrolling';

export default function useScrollingManagerData(): IScrollingManagerValues {
  const { position, direction } = useScrolling();
  return {
    position,
    direction,
  };
}
