import { ITrackRadioheartPrev } from 'interfaces/ITrackRadioheart';
import compareITrackRadioheart from '@tools/ITrack/compareITrackRadioheart';

//Добавляем к массиву элемент в начало
export default function useAddLastTrack(
  newTrack: null | ITrackRadioheartPrev,
  tracks: null | ITrackRadioheartPrev[]
): null | ITrackRadioheartPrev[] {
  if (!tracks || !newTrack) return tracks;
  if (!compareITrackRadioheart(tracks[0], newTrack)) tracks.unshift(newTrack);
  return tracks;
}
