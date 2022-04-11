import { IChannel } from '../../interfaces';
import { compareIChannels } from './index';
import isEmptyArray from '../../utils/isEmptyArray';

//Получаем индекс канала текущего
export default function getCurrentIndexChannel(channel: IChannel, channels: IChannel[]): number {
  if (isEmptyArray(channels)) return 0;
  return channels.findIndex((c: IChannel) => compareIChannels(c, channel));
}
