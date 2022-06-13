/**
 * Created by westp on 11.06.2022
 */

import React, { useCallback, useContext, useState } from 'react';
import s from './BroadcastPlayer.module.scss';
import cn from 'classnames';
import IconButton from '@mui/material/IconButton';
import { ChevronLeft, ChevronRight, FactCheck, Share } from '@mui/icons-material';
import PlayButton from 'components/UI/buttons/PlayButton';
import compareIChannels from '../../../../tools/IChannel/compareIChannels';
import { RadioPlayerContext } from '../../../../contexts/RadioPlayerManager';
import { IChannel } from 'interfaces/IChannel';
// import Link from 'next/link';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';

export default function BroadcastPlayer({
  className,
  channel,
  isCurrentChannel,
}: IBroadcastPlayerProps) {
  const r = useRouter();
  const { status, set, channel: current, setNext, setPrev } = useContext(RadioPlayerContext),
    [loading, setLoading] = useState<null | 'order'>(null),
    isAndPlay = status === 'played',
    nextHandler = useCallback(() => setNext(isAndPlay), [isAndPlay, setNext]),
    prevHandler = useCallback(() => setPrev(isAndPlay), [isAndPlay, setPrev]),
    pushOrderPageHandler = useCallback(() => {
      setLoading('order');
      // eslint-disable-next-line promise/catch-or-return
      r.push(`/broadcast/${channel.id}/order/tracks`).finally(() => setLoading(null));
    }, [channel.id, r]);
  return (
    <div className={cn(s.BroadcastPlayer, className)}>
      <IconButton className={cn(s.order)} onClick={pushOrderPageHandler}>
        {loading !== 'order' ? <FactCheck /> : <CircularProgress />}
      </IconButton>
      <IconButton className={cn(s.prev)} onClick={prevHandler}>
        <ChevronLeft />
      </IconButton>
      <PlayButton
        className={cn(s.play)}
        active={isCurrentChannel ?? compareIChannels(channel, current)}
        onClick={() => set(channel, true)}
        status={status}
      />
      <IconButton className={cn(s.next)} onClick={nextHandler}>
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
