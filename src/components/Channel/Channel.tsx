/**
 * Created by westp on 22.03.2022
 */

import React, { useContext } from 'react';
import ChannelComponent, { IChannelProps } from 'components/UI/ChannelComponent';
import IChannel from '../../interfaces/IChannel';
import { RadioPlayerContext } from '../../contexts/RadioPlayerManager';
import { compareIChannels } from 'src/tools/IChannel';

//Компонент канала
export default function Channel({
  className,
  channel,
  isNew,
  typeSize,
  isError,
}: ISimpleChannelProps) {
  const { status, set, channel: current }: any = useContext(RadioPlayerContext);
  if (!current) return null;
  const isActive = compareIChannels(current, channel);
  return (
    <ChannelComponent
      className={className}
      channel={channel}
      isNew={isNew}
      isError={isError}
      isCurrent={isActive}
      onPlayClick={() => set(channel, true)}
      status={status}
      typeSize={typeSize}
    />
  );
}

Channel.defaultProps = {
  className: '',
  type: 'adaptive',
  isCurrent: false,
  isNew: false,
};

interface ISimpleChannelProps extends IChannelProps {
  className?: string;
  channel: IChannel;
  isNew?: boolean;
  isError?: boolean;
  typeSize?: 'small';
}
