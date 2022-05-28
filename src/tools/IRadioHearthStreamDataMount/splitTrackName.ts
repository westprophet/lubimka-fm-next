import IRadioHearthStreamDataMount from '../../api/radioheathAPI/types/IRadioHearthStreamDataMount';
import TAudioTitle from '../../types/TAudioTitle';
import getTAudioTitleByString from '../ITrack/getTAudioTitleByString';

export default function splitTrackName(d?: IRadioHearthStreamDataMount | null): TAudioTitle | null {
  if (!d) return null;

  return getTAudioTitleByString(d.title);
}
