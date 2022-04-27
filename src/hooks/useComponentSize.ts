import TBreakpoints from '../types/TBreakpoints';
import useBreakpoint from './useBreakpoint';
import TBreakpointSize from '../types/TBreakpointSize';

//Получаем условный массив со значением 'size' : true; для отображения класса
export default function useComponentSize<T>(
  sizes?: Partial<TBreakpoints<T & string>>
): TBreakpoints<T> | null {
  if (!sizes) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const b: TBreakpoints<boolean> = useBreakpoint();

  const result: any = {};
  for (const size in sizes) {
    if (size) {
      // @ts-ignore
      result[size] = b[size];
    }
  }

  return result;
  // return {
  //   [sizes?.xs]: b.xs && sizes?.xs,
  //   [sizes?.sm]: b.sm && sizes?.sm,
  //   [sizes?.md]: b.md && sizes?.md,
  //   [sizes?.lg]: b.lg && sizes?.lg,
  //   [sizes?.xl]: b.xl && sizes?.xl,
  //   [sizes?.xxl]: b.xl && sizes?.xxl,
  //   [sizes?.xxxl]: b.xl && sizes?.xxxl,
  // };
}
