import TBreakpoints from '../types/TBreakpoints';
import useBreakpoint from './useBreakpoint';

//Получаем условный массив со значением 'size' : true; для отображения класса
export default function useComponentSize<T>(sizes: Partial<TBreakpoints<T & string>>) {
  if (!sizes) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const b: TBreakpoints<boolean> = useBreakpoint();
  return {
    [sizes?.xs]: b.xs && sizes?.xs,
    [sizes?.sm]: b.sm && sizes?.sm,
    [sizes?.md]: b.md && sizes?.md,
    [sizes?.lg]: b.lg && sizes?.lg,
    [sizes?.xl]: b.xl && sizes?.xl,
    [sizes?.xxl]: b.xl && sizes?.xxl,
    [sizes?.xxxl]: b.xl && sizes?.xxxl,
  };
}
