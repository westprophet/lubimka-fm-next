import { IChannel } from '../../interfaces';

export default function compareIChannels(c1: IChannel, c2: IChannel): boolean {
  return c1.attributes.name.toLocaleLowerCase() === c2.attributes.name.toLocaleLowerCase();
}
