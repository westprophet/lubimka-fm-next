//Получаем дополнительные методы работы с каналами
import { Dispatch, SetStateAction, useCallback } from 'react';
import isEmptyArray from 'src/utils/isEmptyArray';
import { IChannel } from '../../../interfaces';

export default function useChannelsMethods(
  setChannel: Dispatch<SetStateAction<IChannel>>,
  current: IChannel,
  channels: IChannel[]
) {
  const _getPrev = useCallback(
    (prev: IChannel) => {
      const curIndex = channels.findIndex(
        (c: IChannel) => prev.attributes.name === c.attributes.name
      );
      return channels[curIndex - 1] ?? channels[channels.length - 1];
    },
    [channels]
  );
  const _getNext = useCallback(
    (prev: IChannel) => {
      const curIndex = channels.findIndex(
        (c: IChannel) => prev.attributes.name === c.attributes.name
      );
      return channels[curIndex + 1] ?? channels[0];
    },
    [channels]
  );

  const getPrev = useCallback(() => _getPrev(current), [_getPrev, current]);
  const getNext = useCallback(() => _getNext(current), [_getNext, current]);

  //Установить следующий канал
  const setNextChannel = useCallback((): IChannel | undefined => {
    if (isEmptyArray(channels)) return;
    const next = _getNext(current);
    setChannel(next);
    return next;
  }, [_getNext, channels, current, setChannel]);

  //Установить предыдущий канал
  const setPrevChannel = useCallback((): IChannel | undefined => {
    if (isEmptyArray(channels)) return;
    const prev = _getPrev(current);
    setChannel(prev);
    return prev;
  }, [_getPrev, channels, current, setChannel]);

  return {
    getNext,
    getPrev,
    setNextChannel,
    setPrevChannel,
  };
}
