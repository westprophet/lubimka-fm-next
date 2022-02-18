import IChannel from '../../../interfaces/IChannel';
import { DEFAULT_CHANNEL_KEY } from '../constants';
import isEmptyArray from '../../../utils/isEmptyArray';

export default function getDefaultChannel(channels: IChannel[]): IChannel | undefined | null {
  if (isEmptyArray(channels)) {
    console.error('ChannelManager: getDefaultChannel', 'channels: isEmptyArray');
    return null;
  }
  return channels.find((c: IChannel) => c.title === DEFAULT_CHANNEL_KEY); //Ищем канал по умолчанию
}
