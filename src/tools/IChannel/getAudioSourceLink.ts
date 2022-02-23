import IChannel from 'src/interfaces/IChannel';
import _getAudioSourceLink from '../IStream/getAudioSourceLink';

export default function getAudioSourceLink(c: IChannel) {
  return _getAudioSourceLink(c.attributes.stream);
}
