/***
 * Created by westp on 23.04.2022
 */

//Check entity: ITeamMember
export default function isValidITeamMember(d: any): boolean {
  const inner = 'attributes' in d ? d.attributes : null;
  const isValid = 'name' in inner && 'surname' in inner && 'post' in inner;
  if (!isValid) console.error('isValidTeamMember: no-valid:', d);
  return isValid;
}
