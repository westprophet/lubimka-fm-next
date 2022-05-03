import useChannelStream from './useChannelStream';
import { useContext, useEffect } from 'react';
import { IChannel } from '../../../interfaces';
import { RadioPlayerContext } from '../RadioPlayerManager';
import compareIChannels from '../../../tools/IChannel/compareIChannels';
import TCreatedStream from '../../../types/TCreatedStream';

//Если текущий поток уже идет то берем его, если нет то создаем новый поток
export default function useGetChannelStream(channel: IChannel): IUseGetChannelStream {
  const rpc = useContext(RadioPlayerContext);
  const isCurrentChannel = compareIChannels(channel, rpc.channel); //Это активный канал
  //Нужен отдельный поток
  const isNeedNewStream =
    !isCurrentChannel ||
    rpc.stream.status === 'stopped' ||
    rpc.stream.status === 'error' ||
    rpc.stream.status === 'paused';

  const newStream = useChannelStream(channel);

  useEffect(() => {
    if (!isNeedNewStream && newStream.status === 'active') newStream.pauseStream(); //Останавливаем поток
    return newStream.stopStream; // Закрываем поток
  }, [channel, isNeedNewStream]);

  const res = isNeedNewStream ? newStream : rpc.stream;
  return { ...res, isCurrentChannel, isNewStream: isNeedNewStream };
}

export interface IUseGetChannelStream extends TCreatedStream {
  isNewStream: boolean; //Новый поток
}
