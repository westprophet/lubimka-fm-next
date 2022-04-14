/**
 * Created by westprophet on 13.02.2022
 */

import { CHANNELS, INITIAL_VALUES } from './constants';
import { createContext } from 'react';
import IChannelManagerValues from './types/IChannelManagerState';
import useChannelState from './hooks/useChannelState';
import IChannel from '../../interfaces/IChannel';

export const ChannelManagerContext = createContext<IChannelManagerValues>(INITIAL_VALUES);

//Менеджер каналов
export default function ChannelManager({ children, channels: _channels }: IChannelManagerProps) {
  const { current, setChannel, channels, isLoadingChannels, prevChannel, nextChannel } =
    useChannelState(_channels);

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
ChannelManager.defaultProps = {
  channels: CHANNELS,
};

interface IChannelManagerProps {
  children: any;
  channels?: IChannel[];
}

export type { IChannelManagerValues };
