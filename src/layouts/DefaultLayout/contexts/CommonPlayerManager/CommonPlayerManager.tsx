/**
 * Created by westprophet on 09.04.2022
 */

import React, { createContext } from 'react';

import CommonPlayer from '../../components/CommonPlayer';
import ICommonPlayerManagerValues from './types/ICommonPlayerManagerValues';
import INITIAL_VALUES from './constants/INITIAL_VALUES';

import useCommonPlayerData from './hooks/useCommonPlayerData';

export const CommonPlayerUIManagerContext =
  createContext<ICommonPlayerManagerValues>(INITIAL_VALUES);

export default function CommonPlayerManager({
  fixed,
  transparent,
  children,
  show,
  disable,
}: ICommonPlayerManagerProps) {
  const {
    isOpenChannelMenu,
    setIsOpenChannelMenu,
    pinned,
    setPinned,
    title,
    channels,
    image,
    isLoading,
    status,
    play,
    stop,
    channel,
  } = useCommonPlayerData();

  if (disable) return children;
  return (
    <CommonPlayerUIManagerContext.Provider value={INITIAL_VALUES}>
      {children}
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
    </CommonPlayerUIManagerContext.Provider>
  );
}

CommonPlayerManager.defaultProps = {
  transparent: false,
  fixed: true,
  show: true,
  disable: false,
};

interface ICommonPlayerManagerProps {
  disable?: boolean;
  children: any;
  fixed?: boolean;
  show?: boolean;
  transparent?: boolean;
}
