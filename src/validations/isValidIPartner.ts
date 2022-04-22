/***
 * Created by westp on 22.04.2022
 */

//Check entity: IPartner
export default function isValidIPartner(d: any): boolean {
  const inner = 'attributes' in d ? d.attributes : null;
  const isValid =
    'title' in inner && 'subtitle' in inner && 'description' in inner && 'siteURL' in inner;
  if (!isValid) console.error('isValidPartner: no-valid:', d);
  return isValid;
}
