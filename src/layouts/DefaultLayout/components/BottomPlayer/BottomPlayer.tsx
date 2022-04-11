/**
 * Created by westp on 11.04.2022
 */

import React from 'react';
import CommonPlayer from 'components/UI/CommonPlayer';
import useCommonPlayerData from './hooks/useCommonPlayerData';

export default function BottomPlayer({
  fixed,
  transparent,
  show,
  pinned,
  setPinned,
  isOpenChannelMenu,
  setIsOpenChannelMenu,
}: IBottomCommonPlayerProps) {
  const { title, channels, image, isLoading, status, play, stop, channel } = useCommonPlayerData();
  return (
    <CommonPlayer
      fixed={fixed}
      show={show}
      transparent={transparent}
      control={{
        status,
        play,
        stop,
      }}
      channels={{
        current: channel,
        channels: channels,
        isOpenChannelMenu,
        setIsOpenChannelMenu,
      }}
      pinned={{
        pinned,
        setPinned,
      }}
      title={title}
      cover={{
        url: image,
        isLoading: isLoading,
      }}
    />
  );
}

BottomPlayer.defaultProps = {
  transparent: false,
  fixed: true,
  show: true,
  disable: false,
};

interface IBottomCommonPlayerProps {
  fixed?: boolean;
  show?: boolean;
  pinned: boolean;
  setPinned(v: boolean): any;
  isOpenChannelMenu: boolean;
  setIsOpenChannelMenu(v: boolean): any;
  transparent?: boolean;
}