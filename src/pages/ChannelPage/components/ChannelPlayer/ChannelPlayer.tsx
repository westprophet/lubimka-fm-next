/**
 * Created by westp on 30.04.2022
 */

import React, { useContext } from 'react';
import s from './ChannelPlayer.module.scss';
import cn from 'classnames';
import PlayButton from 'components/UI/buttons/PlayButton';
import { RadioPlayerContext } from '../../../../contexts/RadioPlayerManager';
import { IChannel } from '../../../../interfaces';
import compareIChannels from '../../../../tools/IChannel/compareIChannels';

export default function ChannelPlayer({ className, channel }: IChannelPlayerProps) {
  const { status, play, channel: current } = useContext(RadioPlayerContext);
  return (
    <div className={cn(s.ChannelPlayer, className)}>
      <PlayButton
        type={2}
        active={compareIChannels(channel, current)}
        onClick={() => {
          play(channel);
        }}
        status={status}
      />
    </div>
  );
}

ChannelPlayer.defaultProps = {
  className: '',
};

interface IChannelPlayerProps {
  className?: string;
  channel: IChannel;
}
