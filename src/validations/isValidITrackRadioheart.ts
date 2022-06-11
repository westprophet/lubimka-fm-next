import {
  ITrackRadioheartNew,
  ITrackRadioheartNext,
  ITrackRadioheartPrev,
} from 'interfaces/ITrackRadioheart';
import {
  isValidITrackRadioheartNew,
  isValidITrackRadioheartNext,
  isValidITrackRadioheartPrev,
} from './index';

/***
 * Created by westp on 11.06.2022
 */

//Check entity: ITrackRadioheart
export default function isValidITrackRadioheart(
  d: any | ITrackRadioheartNew | ITrackRadioheartNext | ITrackRadioheartPrev
): boolean {
  const isValid =
    isValidITrackRadioheartNew(d) ||
    isValidITrackRadioheartPrev(d) ||
    isValidITrackRadioheartNext(d);

  if (!isValid) console.error('isValidITrackRadioheart: no-valid:', d);
  return isValid;
}
