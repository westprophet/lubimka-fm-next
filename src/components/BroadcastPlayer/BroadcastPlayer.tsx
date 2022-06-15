/**
 * Created by westp on 11.06.2022
 */

// @ts-ignore
import React, { startTransition, useCallback, useContext, useState } from 'react';
import s from './BroadcastPlayer.module.scss';
import cn from 'classnames';
import IconButton from '@mui/material/IconButton';
import { ChevronLeft, ChevronRight, FactCheck, Share } from '@mui/icons-material';
import PlayButton from 'components/UI/buttons/PlayButton';
import compareIChannels from '@tools/IChannel/compareIChannels';
import { RadioPlayerContext } from '../../contexts/RadioPlayerManager';
import { IChannel } from 'interfaces/IChannel';
// import Link from 'next/link';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';

export default function BroadcastPlayer({ className, channel }: IBroadcastPlayerProps) {
  const r = useRouter();
  const {
    status,
    set,
    channel: current,
    setNext,
    setPrev,
    isLoadingChannels,
  } = useContext(RadioPlayerContext);

  const [loading, setLoading] = useState<null | 'order'>(null);
  const _channel: IChannel | null = channel ?? current;
  const isCurrent: boolean = compareIChannels(_channel, current);
  const isError: boolean = status === 'error';
  const isAndPlay = status === 'played';

  const nextHandler = useCallback(
    (event) => {
      event.preventDefault();
      startTransition(() => {
        setNext(isAndPlay);
      });
    },
    [isAndPlay, setNext]
  );
  const prevHandler = useCallback(
    (event) => {
      event.preventDefault();
      startTransition(() => {
        setPrev(isAndPlay);
      });
    },
    [isAndPlay, setPrev]
  );
  const pushOrderPageHandler = useCallback(() => {
    if (loading || isError) return;
    setLoading('order');
    // eslint-disable-next-line promise/catch-or-return
    r.push(`/broadcast/${_channel?.id}/order/tracks`).finally(() => setLoading(null));
  }, [_channel?.id, isError, loading, r]);

  if (!_channel || isLoadingChannels) return null;
  return (
    <div className={cn(s.BroadcastPlayer, { [s.error]: isError }, className)}>
      <IconButton className={cn(s.order)} onClick={pushOrderPageHandler}>
        {loading !== 'order' ? <FactCheck /> : <CircularProgress />}
      </IconButton>
      <IconButton className={cn(s.prev)} onClick={prevHandler}>
        <ChevronLeft />
      </IconButton>
      <PlayButton
        className={cn(s.play)}
        active={isCurrent}
        status={status}
        onClick={() => {
          if (_channel) set(_channel, true);
        }}
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
  channel?: IChannel | null;
}
