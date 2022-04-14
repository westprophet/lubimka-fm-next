/***
 * Created by westp on 12.04.2022
 */

//Check entity: IEvent
export default function isValidIEvent(d: any): boolean {
  const inner = 'attributes' in d ? d.attributes : null;
  const isValid =
    'title' in inner &&
    'address' in inner &&
    'preview' in inner &&
    'endDate' in inner &&
    'startDate' in inner;
  if (!isValid) console.error('isValidIEvent: no-valid:', d);
  return isValid;
}
