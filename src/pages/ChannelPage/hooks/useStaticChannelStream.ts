import useChannelStream from 'src/hooks/useChannelStream';
import { IChannel } from '../../../interfaces';
import { useEffect } from 'react';

//Создание стрима не зависимо от основного потока
export default function useStaticChannelStream(channel: IChannel, isEnable: boolean) {
  const { data, status, startStream, stopStream } = useChannelStream(channel);

  useEffect(() => {
    if (isEnable) startStream();
    else stopStream();
    return stopStream;
  }, [isEnable, startStream, stopStream]);

  return {
    data,
    status,
  };
}
