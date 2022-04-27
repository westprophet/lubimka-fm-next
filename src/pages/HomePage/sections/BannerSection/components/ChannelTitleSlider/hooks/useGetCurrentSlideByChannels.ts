import isEmptyArray from 'src/utils/isEmptyArray';
import { IChannel } from '../../../../../../../interfaces';
import { compareIChannels } from 'src/tools/IChannel';
import getCurrentIndexChannel from '../../../../../../../tools/IChannel/getCurrentIndexChannel';
//Поиск номера канала для слайдера
export default function useGetCurrentSlideByChannels(
  current: IChannel | null,
  channels: IChannel[] | null
): number {
  if (isEmptyArray(channels) || !current) return 0;
  // @ts-ignore
  return getCurrentIndexChannel(current, channels);
}
