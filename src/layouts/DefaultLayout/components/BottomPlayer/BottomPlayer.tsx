/**
 * Created by westp on 11.04.2022
 */

import React, { useContext } from 'react';
import CommonPlayer from 'components/UI/CommonPlayer';
import { RadioPlayerContext } from '../../../../contexts/RadioPlayerManager';
import useImageState from '../../../../hooks/useImageState';

export default function BottomPlayer({
  fixed,
  transparent,
  show,
  pinned,
  setPinned,
  isOpenChannelMenu,
  setIsOpenChannelMenu,
}: IBottomCommonPlayerProps) {
  const { stream, status, toggle, channel: current, channels } = useContext(RadioPlayerContext);
  console.log(status);
  const { image } = useImageState(stream?.current);
  if (!current) return null;
  return (
    <CommonPlayer
      fixed={fixed}
      show={show}
      transparent={transparent}
      control={{
        status,
        onClick: () => {
          toggle();
        },
      }}
      channels={{
        current,
        channels: channels ?? [],
        isOpenChannelMenu,
        setIsOpenChannelMenu,
      }}
      pinned={{
        pinned,
        setPinned,
      }}
      title={stream?.current}
      cover={{
        url: image,
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
  pinned: boolean | undefined | null;
  setPinned(v: boolean): any;
  isOpenChannelMenu: boolean | undefined | null;
  setIsOpenChannelMenu(v: boolean): any;
  transparent?: boolean;
}
