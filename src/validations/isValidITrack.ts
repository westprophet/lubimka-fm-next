/***
 * Created by westp on 11.06.2022
 */

//Check entity: ITrack
export default function isValidITrack(d: any): boolean {
  const inner = 'attributes' in d ? d.attributes : null;
  const isValid = 'title' in inner && 'author' in inner && 'cover' in inner && 'source' in inner;
  if (!isValid) console.error('isValidITrack: no-valid:', d);
  return isValid;
}
