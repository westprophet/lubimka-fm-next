import { useEffect } from 'react';
import { IChannel } from '../../../interfaces';

import TCreatedStream from '../../../types/TCreatedStream';
import useGetChannelStream from './useGetChannelStream';

export default function useGetStaticChannelStream(channel: IChannel): TCreatedStream {
  const s = useGetChannelStream(channel); // Получаем текущий либо новый поток
  useEffect(() => {
    if (s.isNewStream) s.startStream(); // Открываем поток если это новый канал
  }, [channel, s.isNewStream]);

  return s;
}
