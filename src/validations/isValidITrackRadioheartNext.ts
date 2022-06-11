/***
 * Created by westp on 11.06.2022
 */

//Check entity: ITrackRadioheartNext
export default function isValidITrackRadioheartNext(d: any): boolean {
  return 'id' in d && 'name' in d && 'time' in d;
}
