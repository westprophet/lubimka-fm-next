import IChannel from '../../../interfaces/IChannel';

import useChannels from './useChannels';
import useChannelsMethods from './useChannelsMethods';
import useLocalStorage from 'use-local-storage';

export default function useChannelState(_channels: IChannel[]) {
  const { channels, isLoading } = useChannels(_channels); //Получаем каналы
  const [current, setChannel] = useLocalStorage<IChannel>('channel', channels[0], {
    syncData: false,
  }); //Каналы и канал по умолчанию

  const { nextChannel, prevChannel } = useChannelsMethods(setChannel, current, channels);

  return {
    current,
    setChannel,
    channels,
    isLoadingChannels: isLoading,
    prevChannel,
    nextChannel,
  };
}
