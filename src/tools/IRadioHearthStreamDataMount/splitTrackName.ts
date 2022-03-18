import IRadioHearthStreamDataMount from '../../api/radioheathAPI/types/IRadioHearthStreamDataMount';
import TAudioTitle from '../../types/TAudioTitle';

export default function splitTrackName(d: IRadioHearthStreamDataMount): TAudioTitle | null {
  if (!d) return null;
  const temp = d.title
    .replace(/&#039;/gi, "'")
    .replace(/&amp;/gi, 'feat.')
    .replace(/&quot;/gi, '"')
    .split(/ - /);
  return {
    artist: temp[0],
    title: temp[1] ?? temp[0],
  };
}
