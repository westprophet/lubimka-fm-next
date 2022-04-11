import isEmptyArray from 'src/utils/isEmptyArray';
import { IChannel } from '../../../../../../../interfaces';
import { compareIChannels } from 'src/tools/IChannel';
import getCurrentIndexChannel from '../../../../../../../tools/IChannel/getCurrentIndexChannel';
//Поиск номера канала для слайдера
export default function useGetCurrentSlideByChannels(
  current: IChannel,
  channels: IChannel[]
): number {
  if (isEmptyArray(channels)) return 0;
  return getCurrentIndexChannel(current, channels);
}
