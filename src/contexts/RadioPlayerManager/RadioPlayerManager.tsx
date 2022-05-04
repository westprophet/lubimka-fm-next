/**
 * Created by westprophet on 19.02.2022
 */

import React, { createContext } from 'react';

import { IPlayerManagerValues } from './types';
import { INITIAL_VALUES, RADIO_PLAYER_ID } from './constants';

import useInitialAudioMethods from './hooks/useInitialAudioMethods';
import { IChannel } from '../../interfaces';

export const RadioPlayerContext = createContext<IPlayerManagerValues>(INITIAL_VALUES);

//Глобальный контекст радио плеера
export default function RadioPlayerManager({ children, channels: _channels }: IPlayerManagerProps) {
  const { play, status, audioRef, stop, stream, toggle, channels, channel, set, setPrev, setNext } =
    useInitialAudioMethods(_channels);

  const values: IPlayerManagerValues = {
    id: RADIO_PLAYER_ID,
    audioRef,
    stop,
    play,
    set,
    toggle,
    setPrev,
    setNext,
    status,
    channel,
    channels,
    stream,
  };

  return <RadioPlayerContext.Provider value={values}>{children}</RadioPlayerContext.Provider>;
}

// RadioPlayerManager.defaultProps = {
//   channels: CHANNELS,
// };

interface IPlayerManagerProps {
  children: any;
  channels?: IChannel[];
}
