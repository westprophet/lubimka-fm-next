/**
 * Created by westprophet on 19.02.2022
 */

import React, { createContext, useContext } from 'react';

import { IPlayerManagerValues } from './types';
import { INITIAL_VALUES, RADIO_PLAYER_ID } from './constants';

import useInitialAudioMethods from './hooks/useInitialAudioMethods';
import { ChannelManagerContext } from '../ChannelManager';

export const RadioPlayerContext = createContext<IPlayerManagerValues>(INITIAL_VALUES);

export default function RadioPlayerManager({ children }: IPlayerManagerProps) {
  const { current: channel } = useContext(ChannelManagerContext); // Получаем текущий канал
  const { play, status, onCanPlay, audioRef, stop, onError } = useInitialAudioMethods(channel);
  const values: IPlayerManagerValues = {
    id: RADIO_PLAYER_ID,
    audioRef,
    stop,
    play,
    status,
    channel,
  };
  return (
    <RadioPlayerContext.Provider value={values}>
      <audio
        ref={audioRef}
        autoPlay={false}
        preload="none"
        onCanPlay={onCanPlay}
        onError={onError}
        id={RADIO_PLAYER_ID}
        crossOrigin="anonymous"
        src={'https://a6.radioheart.ru:9021/RH16706'}
      />
      {children}
    </RadioPlayerContext.Provider>
  );
}

interface IPlayerManagerProps {
  // className?: string;
  // channel?: IChannel;
  children: any;
}
