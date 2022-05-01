import IChannel from 'src/interfaces/IChannel';
import _getAudioSourceLink from '../IStream/getAudioSourceLink';

export default function getAudioSourceLink(c: IChannel | null): string | null {
  if (!c) return null;
  return _getAudioSourceLink(c.attributes.stream);
}
