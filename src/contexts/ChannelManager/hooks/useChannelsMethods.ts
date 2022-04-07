//Получаем дополнительные методы работы с каналами
import { Dispatch, SetStateAction, useCallback } from 'react';
import isEmptyArray from 'src/utils/isEmptyArray';
import { IChannel } from '../../../interfaces';

export default function useChannelsMethods(
  setChannel: Dispatch<SetStateAction<IChannel>>,
  current: IChannel,
  channels: IChannel[]
) {
  //Следующий канал
  const nextChannel = useCallback(() => {
    if (isEmptyArray(channels)) return;
    setChannel((prev: IChannel) => {
      const curIndex = channels.findIndex(
        (c: IChannel) => prev.attributes.name === c.attributes.name
      );
      return channels[curIndex + 1] ?? channels[0];
    });
  }, [channels, setChannel]);

  //Предыдущий канал
  const prevChannel = useCallback(() => {
    if (isEmptyArray(channels)) return;
    setChannel((prev: IChannel) => {
      const curIndex = channels.findIndex(
        (c: IChannel) => prev.attributes.name === c.attributes.name
      );
      return channels[curIndex - 1] ?? channels[channels.length - 1];
    });
  }, [channels, setChannel]);

  return {
    nextChannel,
    prevChannel,
  };
}
