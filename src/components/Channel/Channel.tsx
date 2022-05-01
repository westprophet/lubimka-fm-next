/**
 * Created by westp on 22.03.2022
 */

import React, { useContext } from 'react';
import ChannelComponent, { TChannelComponentType } from 'components/UI/ChannelComponent';
import IChannel from '../../interfaces/IChannel';
import { RadioPlayerContext } from '../../contexts/RadioPlayerManager';
import { ChannelManagerContext } from '../../contexts/ChannelManager';
import { compareIChannels } from 'src/tools/IChannel';
import TBreakpoints from '../../types/TBreakpoints';

//Компонент канала
export default function Channel({ className, channel, size, isNew, sizes }: ISimpleChannelProps) {
  const { setChannel, current } = useContext(ChannelManagerContext);
  const { status, play, stop }: any = useContext(RadioPlayerContext);
  if (!current) return null;
  const isActive = compareIChannels(current, channel);

  return (
    <ChannelComponent
      className={className}
      channel={channel}
      size={size}
      isNew={isNew}
      active={isActive}
      onPlay={() => {
        play(channel);
      }}
      onStop={() => {
        stop();
      }}
      status={status}
    />
  );
}

Channel.defaultProps = {
  className: '',
  type: 'adaptive',
  active: false,
  isNew: false,
};

interface ISimpleChannelProps {
  className?: string;
  channel: IChannel;
  size?: TChannelComponentType;
  sizes?: Partial<TBreakpoints<TChannelComponentType>>;
  isNew?: boolean;
}
