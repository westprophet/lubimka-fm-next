/**
 * Created by westprophet on 19.02.2022
 */

import React, { createContext } from 'react';
import s from './PlayerManager.module.scss';
import cn from 'classnames';
import IChannelManagerValues from '../ChannelManager/types/IChannelManagerState';
import { INITIAL_VALUES } from '../ChannelManager/constants';

export const ChannelManagerContext = createContext<IChannelManagerValues>(INITIAL_VALUES);

export default function PlayerManager({ className }: IPlayerManagerProps) {
  return (
    <div className={cn(s.PlayerManager, className)}>
      <div></div>
    </div>
  );
}

PlayerManager.defaultProps = {
  className: '',
};

interface IPlayerManagerProps {
  className?: string;
}
