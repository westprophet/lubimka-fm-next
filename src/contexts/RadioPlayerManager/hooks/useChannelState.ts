import IChannel from '../../../interfaces/IChannel';

import useChannels from './useChannels';
import useChannelsMethods from './useChannelsMethods';
import useLocalStorage from 'use-local-storage';
import IChannelManagerValues from '../types/IChannelManagerState';

export default function useChannelState(_channels?: IChannel[]): IChannelManagerValues {
  const { channels, isLoading, isError } = useChannels(_channels); //Получаем каналы
  const [current, setChannel] = useLocalStorage<IChannel>('channel', channels[0], {
    syncData: false,
  }); //Каналы и канал по умолчанию

  const { setNextChannel, setPrevChannel, getNext, getPrev } = useChannelsMethods(
    setChannel,
    current,
    channels
  );

  return {
    current,
    setChannel,
    channels,
    isLoading,
    isError,
    getNext,
    getPrev,
    setPrevChannel,
    setNextChannel,
  };
}
