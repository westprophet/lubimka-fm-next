import IChannel from '../../../interfaces/IChannel';

import useChannels from './useChannels';
import useChannelsMethods from './useChannelsMethods';
import useLocalStorage from 'use-local-storage';
import IChannelManagerValues from '../types/IChannelManagerState';
import { LOCAL_KEY } from '../constants/LOCAL_KEY';
import { useCallback } from 'react';
import isFrontendEnvironment from 'utils/isFrontendEnvironment';

export default function useChannelState(_channels?: IChannel[]): IChannelManagerValues {
  const { channels, isLoading, isError } = useChannels(_channels); //Получаем каналы
  const defaultChannel = channels[0];
  const [current, setChannel] = useLocalStorage<IChannel>(LOCAL_KEY, defaultChannel, {
    syncData: false,
  }); //Каналы и канал по умолчанию
  const clearDataFromLocalStorage = useCallback(() => {
    if (isFrontendEnvironment()) {
      localStorage.removeItem(LOCAL_KEY);
    }
  }, []);

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
    clearDataFromLocalStorage,
  };
}
