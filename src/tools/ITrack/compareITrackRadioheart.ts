//Получение названия и автора по имени
import { ITrackRadioheart } from '../../interfaces/ITrackRadioheart';

export default function compareITrackRadioheart(
  a: null | ITrackRadioheart,
  b: null | ITrackRadioheart
): null | boolean {
  if (!a || !b) return null;
  return a.name === b.name;
}
