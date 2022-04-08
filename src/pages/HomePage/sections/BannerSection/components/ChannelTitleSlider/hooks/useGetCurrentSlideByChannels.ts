import isEmptyArray from 'src/utils/isEmptyArray';
import { IChannel } from '../../../../../../../interfaces';

//Поиск номера канала для слайдера
export default function useGetCurrentSlideByChannels(
  current: IChannel,
  channels: IChannel[]
): number {
  if (isEmptyArray(channels)) return 0;
  return channels.findIndex((c: IChannel) => c.attributes.name === current.attributes.name);
}
