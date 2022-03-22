/**
 * Created by westp on 22.03.2022
 */

import React, { useContext } from 'react';
import ChannelComponent, { TChannelComponentType } from 'components/UI/ChannelComponent';
import IChannel from '../../interfaces/IChannel';
import { RadioPlayerContext } from '../../contexts/RadioPlayerManager';
import { ChannelManagerContext } from '../../contexts/ChannelManager';

export default function Channel({ className, channel, type, isNew }: ISimpleChannelProps) {
  const { setChannel, current } = useContext(ChannelManagerContext);
  const { status, play, stop }: any = useContext(RadioPlayerContext);
  const isActive = current.attributes.name === channel.attributes.name;
  return (
    <ChannelComponent
      className={className}
      channel={channel}
      type={type}
      isNew={isNew}
      active={isActive}
      onPlay={() => {
        if (isActive) play();
        else setChannel(channel);
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
  type?: TChannelComponentType;
  isNew?: boolean;
}
