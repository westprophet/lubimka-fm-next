import TType from '../types/TType';

//Получаем размер аватарки зависимо от типа
export default function useSizeByType(t?: TType): {
  width: number;
  height: number;
} {
  switch (t) {
    case 'xs':
      return {
        width: 50,
        height: 50,
      };
    case 'sm':
      return {
        width: 60,
        height: 60,
      };
    case 'md':
      return {
        width: 120,
        height: 120,
      };
    case 'lg':
      return {
        width: 150,
        height: 150,
      };
    case 'adaptive':
      return {
        width: 0,
        height: 0,
      };
    default:
      return {
        width: 0,
        height: 0,
      };
  }
}
