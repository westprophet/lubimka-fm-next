import { IChannel } from '../../interfaces';

export default function compareIChannels(c1?: IChannel | null, c2?: IChannel | null): boolean {
  if (!c1 || !c2) return false;
  return c1.attributes.name?.toLocaleLowerCase() === c2.attributes.name?.toLocaleLowerCase();
}
