/**
 * Created by westprophet on 19.02.2022
 */

import React, { createContext, createRef, useRef } from 'react';

import { IPlayerManagerValues } from './types';
import { INITIAL_VALUES, RADIO_PLAYER_ID } from './constants';

import IChannel from 'src/interfaces/IChannel';
import useInitialAudioMethods from './hooks/useInitialAudioMethods';

export const RadioPlayerContext = createContext<IPlayerManagerValues>(INITIAL_VALUES);

export default function RadioPlayerManager({ children, channel }: IPlayerManagerProps) {
  const audioRef = createRef<HTMLMediaElement>(); //Тег плеера
  const { load, play } = useInitialAudioMethods(channel);

  return (
    <RadioPlayerContext.Provider value={INITIAL_VALUES}>
      <audio
        ref={audioRef}
        id={RADIO_PLAYER_ID}
        controls
        crossOrigin="anonymous"
        src={'https://a6.radioheart.ru:9021/RH16706'}
      />
      {children}
      <button
        onClick={() => {
          console.log('play_');
          play();
        }}
      >
        play
      </button>
      <button onClick={audioRef.current?.load}>load</button>
      <button
        onClick={() => {
          audioRef.current?.pause();
          console.log('pause');
        }}
      >
        pause
      </button>
    </RadioPlayerContext.Provider>
  );
}

interface IPlayerManagerProps {
  // className?: string;
  channel?: IChannel;
  children: any;
}
