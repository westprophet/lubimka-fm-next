/***
 * Created by westp on 11.06.2022
 */

//Check entity: ITrackRadioheartPrev
export default function isValidITrackRadioheartPrev(d: any): boolean {
  return 'id' in d && 'name' in d && 'title' in d && 'artist' in d && 'genre' in d;
}
