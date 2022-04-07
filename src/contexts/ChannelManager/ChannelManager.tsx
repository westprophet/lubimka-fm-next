/**
 * Created by westprophet on 13.02.2022
 */

import { createContext } from 'react';
import { INITIAL_VALUES } from './constants';
import IChannelManagerValues from './types/IChannelManagerState';
import useChannelState from './hooks/useChannelState';

export const ChannelManagerContext = createContext<IChannelManagerValues>(INITIAL_VALUES);
//Менеджер каналов
export default function ChannelManager({ children }: IChannelManagerProps) {
  const { current, setChannel, channels, isLoadingChannels, prevChannel, nextChannel } =
    useChannelState();

  const value: IChannelManagerValues = {
    current,
    setChannel,
    channels,
    isLoadingChannels,
    prevChannel,
    nextChannel,
  };
  return <ChannelManagerContext.Provider value={value}>{children}</ChannelManagerContext.Provider>;
}

interface IChannelManagerProps {
  children: any;
}

export type { IChannelManagerValues };
