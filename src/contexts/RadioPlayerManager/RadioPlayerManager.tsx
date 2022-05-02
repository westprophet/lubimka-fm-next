/**
 * Created by westprophet on 19.02.2022
 */

import React, { createContext, useCallback, useContext } from 'react';

import { IPlayerManagerValues } from './types';
import { INITIAL_VALUES, RADIO_PLAYER_ID } from './constants';

import useInitialAudioMethods from './hooks/useInitialAudioMethods';
import { ChannelManagerContext } from '../ChannelManager';
import { IChannel } from '../../interfaces';

export const RadioPlayerContext = createContext<IPlayerManagerValues>(INITIAL_VALUES);

//Глобальный контекст радио плеера
export default function RadioPlayerManager({ children }: IPlayerManagerProps) {
  const {
    current: channel,
    setChannel,
    setPrevChannel,
    setNextChannel,
  } = useContext(ChannelManagerContext); // Получаем текущий канал
  const { play, status, audioRef, stop, stream, toggle } = useInitialAudioMethods(
    channel,
    setChannel
  );

  //Устанавливаем предыдущий канал и воспроизводим
  const _prevChannel = useCallback(() => {
    const c: IChannel | undefined = setPrevChannel();
    if (c) play(c);
  }, [play, setPrevChannel]);

  //Устанавливаем следующий канал и воспроизводим
  const _nextChannel = useCallback(() => {
    const c: IChannel | undefined = setNextChannel();
    if (c) play(c);
  }, [play, setNextChannel]);

  const values: IPlayerManagerValues = {
    id: RADIO_PLAYER_ID,
    audioRef,
    stop,
    play,
    toggle,
    setPrevChannel: _prevChannel,
    setNextChannel: _nextChannel,
    status,
    channel,
    stream,
  };

  return <RadioPlayerContext.Provider value={values}>{children}</RadioPlayerContext.Provider>;
}

interface IPlayerManagerProps {
  // className?: string;
  // channel?: IChannel;
  children: any;
}
