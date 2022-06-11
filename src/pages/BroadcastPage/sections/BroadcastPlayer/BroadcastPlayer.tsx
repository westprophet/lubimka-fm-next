/**
 * Created by westp on 11.06.2022
 */

import React, { useContext } from 'react';
import s from './BroadcastPlayer.module.scss';
import cn from 'classnames';
import IconButton from '@mui/material/IconButton';
import { ChevronLeft, ChevronRight, FactCheck, Share } from '@mui/icons-material';
import PlayButton from 'components/UI/buttons/PlayButton';
import compareIChannels from '../../../../tools/IChannel/compareIChannels';
import { RadioPlayerContext } from '../../../../contexts/RadioPlayerManager';
import { IChannel } from 'interfaces/IChannel';

export default function BroadcastPlayer({
  className,
  channel,
  isCurrentChannel,
}: IBroadcastPlayerProps) {
  const { status, set, channel: current } = useContext(RadioPlayerContext);
  return (
    <div className={cn(s.BroadcastPlayer, className)}>
      <IconButton className={cn(s.order)}>
        <FactCheck />
      </IconButton>
      <IconButton className={cn(s.prev)}>
        <ChevronLeft />
      </IconButton>
      <PlayButton
        // type={2}
        className={cn(s.play)}
        active={isCurrentChannel ?? compareIChannels(channel, current)}
        onClick={() => {
          set(channel, true);
        }}
        status={status}
      />
      <IconButton className={cn(s.next)}>
        <ChevronRight />
      </IconButton>
      <IconButton className={cn(s.share)}>
        <Share />
      </IconButton>
    </div>
  );
}

BroadcastPlayer.defaultProps = {
  className: '',
};

interface IBroadcastPlayerProps {
  className?: string;
  isCurrentChannel: boolean | undefined;
  channel: IChannel;
}
