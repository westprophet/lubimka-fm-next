/***
 * Created by westp on 13.04.2022
 */

//Check entity: IClub
export default function isValidIClub(d: any): boolean {
  const inner = 'attributes' in d ? d.attributes : null;
  const isValid = 'title' in inner && 'description' in inner && 'siteURL' in inner;
  if (!isValid) console.error('isValidIClub: no-valid:', d);
  return isValid;
}
