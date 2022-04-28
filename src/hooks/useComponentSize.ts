import TBreakpoints from '../types/TBreakpoints';
import useBreakpoint from './useBreakpoint';

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
      result[sizes[size]] = b[size];
    }
  }

  return result;
}
