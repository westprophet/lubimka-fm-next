/**
 * Created by westprophet on 13.02.2022
 */

import { createContext } from 'react';
import { INITIAL_VALUES } from './constants';
import IChannelManagerValues from './types/IChannelManagerState';
import useChannelState from './hooks/useChannelState';

export const ChannelManagerContext = createContext<IChannelManagerValues>(INITIAL_VALUES);
//Менеджер
export default function ChannelManager({ children }: IChannelManagerProps) {
  const { current, setChannel, channels } = useChannelState();
  const value: IChannelManagerValues = {
    current,
    setChannel,
    channels,
  };
  return <ChannelManagerContext.Provider value={value}>{children}</ChannelManagerContext.Provider>;
}

interface IChannelManagerProps {
  children: any;
}

export type { IChannelManagerValues };
