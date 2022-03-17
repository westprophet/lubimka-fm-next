import { useState } from 'react';
import IChannel from '../../../interfaces/IChannel';
import useCurrentChannel from './useCurrentChannel';
import { setLocalChannel } from '../utils';
import useChannels from './useChannels';

export default function useChannelState() {
  const { channels, isLoading } = useChannels(); //Получаем каналы
  const channel = useCurrentChannel(channels); // Получаем канал по умолчанию или выбранный пользователем канал
  const [current, setChannel] = useState<IChannel>(channel); //Каналы и канал по умолчанию
  const _setChannel = (c: IChannel) => {
    setLocalChannel(c);
    setChannel(c);
  };
  return { current, setChannel: _setChannel, channels, isLoadingChannels: isLoading };
}
