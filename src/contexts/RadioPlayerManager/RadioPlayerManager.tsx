/**
 * Created by westprophet on 19.02.2022
 */

import React, { createContext, useCallback, useContext } from 'react';

import { IPlayerManagerValues } from './types';
import { INITIAL_VALUES, RADIO_PLAYER_ID } from './constants';

import useInitialAudioMethods from './hooks/useInitialAudioMethods';
import { ChannelManagerContext } from '../ChannelManager';
import tools from '../../tools';

export const RadioPlayerContext = createContext<IPlayerManagerValues>(INITIAL_VALUES);

//Глобальный контекст радио плеера
export default function RadioPlayerManager({ children }: IPlayerManagerProps) {
  const { current: channel, setChannel } = useContext(ChannelManagerContext); // Получаем текущий канал
  const { play, status, onCanPlay, audioRef, stop, data, onError, reload, toggle } =
    useInitialAudioMethods(channel);

  const values: IPlayerManagerValues = {
    id: RADIO_PLAYER_ID,
    audioRef,
    stop,
    play,
    toggle,
    status,
    channel,
    data,
  };

  const sourceURL = tools.IChannel.getAudioSourceLink(channel);

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
        src={sourceURL}
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
