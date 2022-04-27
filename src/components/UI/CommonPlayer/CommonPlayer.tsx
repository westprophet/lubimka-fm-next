/**
 * Created by westprophet on 13.02.2022
 */

import React from 'react';
import s from './CommonPlayer.module.scss';
import cn from 'classnames';

import CommonPlayerTitle from './components/CommonPlayerTitle';
import TAudioTitle from '../../../types/TAudioTitle';
import CommonPlayerCover from './components/CommonPlayerCover';
import CommonPlayerAction from './components/CommonPlayerAction';
import ChannelMenuSelector from './sections/ChannelMenuSelector';
import PlayerControlComponent from 'components/UI/buttons/PlayerControlComponent';
import { TAudioManagerStatus } from '../../../types/TAudioManagerStatus';
import { IChannel } from '../../../interfaces';

//Интерфейс плеера
export default function CommonPlayer({
  className,
  show,
  transparent,
  fixed,
  cover,
  control,
  pinned,
  channels,
  title,
}: ICommonPlayerProps) {
  return (
    <div
      className={cn(
        s.CommonPlayer,
        'with-screen-padding',
        { [s.openChannelMenu]: channels.isOpenChannelMenu },
        { [s.show]: show && pinned.pinned },
        { [s.transparent]: transparent },
        { [s.fixed]: fixed },
        className
      )}
    >
      <CommonPlayerCover className={cn(s.cover)} image={cover.url} isLoading={cover.isLoading} />
      <PlayerControlComponent
        className={cn(s.controls)}
        status={control.status}
        play={control.play}
        stop={control.stop}
        sizes={{
          xs: 'small',
          md: 'middle',
        }}
      />
      <CommonPlayerTitle className={cn(s.title)} ft={title} />
      <CommonPlayerAction
        channel={channels.current}
        className={cn(s.actions)}
        isOpenChannelMenu={channels.isOpenChannelMenu}
        setOpenChannelMenu={channels.setIsOpenChannelMenu}
        pinned={pinned.pinned}
        setPinned={pinned.setPinned}
      />
      <ChannelMenuSelector
        channel={channels.current}
        channels={channels.channels}
        isOpen={channels.isOpenChannelMenu}
        className={cn(s.channelMenuSelector)}
      />
    </div>
  );
}

CommonPlayer.defaultProps = {
  className: '',
  show: true,
  transparent: false,
  fixed: true,
};

interface ICommonPlayerProps {
  className?: string;
  fixed?: boolean;
  show?: boolean;
  transparent?: boolean;
  channels: {
    channels: IChannel[];
    current: IChannel;
    isOpenChannelMenu: boolean | null | undefined;
    setIsOpenChannelMenu(v: boolean): any;
  };
  pinned: {
    pinned: boolean | undefined | null;
    setPinned(v: boolean): any;
  };
  title: TAudioTitle | null;

  cover: {
    url?: string | null;
    isLoading: boolean;
  };
  control: {
    status: TAudioManagerStatus;
    play(): any;
    stop(): any;
  };
}
