// import { useState } from 'react';
import IChannel from '../../../interfaces/IChannel';
// import useCurrentChannel from './useCurrentChannel';
// import { setLocalChannel } from '../utils';
import useChannels from './useChannels';
import useChannelsMethods from './useChannelsMethods';
import useLocalStorage from 'use-local-storage';
import { CHANNELS } from '../constants';

export default function useChannelState() {
  const { channels, isLoading } = useChannels(); //Получаем каналы
  // const channel = useCurrentChannel(channels); // Получаем канал по умолчанию или выбранный пользователем канал
  const [current, setChannel] = useLocalStorage<IChannel>('channel', CHANNELS[0], {
    syncData: process.env.NODE_ENV === 'production',
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
