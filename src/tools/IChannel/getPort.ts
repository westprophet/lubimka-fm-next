import IChannel from '../../interfaces/IChannel';
import _getPort from '../IStream/getPort';

export default function getPort(c: IChannel): null | number {
  return _getPort(c.attributes.stream);
}
