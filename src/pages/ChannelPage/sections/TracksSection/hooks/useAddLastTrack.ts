import { ITrackRadioheart } from '../../../../../interfaces/ITrackRadioheart';
import compareITrackRadioheart from '../../../../../tools/ITrack/compareITrackRadioheart';
import { useRef } from 'react';

//Добавляем к массиву элемент в начало
export default function useAddLastTrack(
  newTrack: null | ITrackRadioheart,
  tracks: null | ITrackRadioheart[]
): null | ITrackRadioheart[] {
  if (!tracks || !newTrack) return tracks;
  if (!compareITrackRadioheart(tracks[0], newTrack)) tracks.unshift(newTrack);
  return tracks;
}
