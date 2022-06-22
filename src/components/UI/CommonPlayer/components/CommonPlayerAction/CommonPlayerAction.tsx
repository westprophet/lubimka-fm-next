/**
 * Created by westp on 19.03.2022
 */

import React from 'react';
import s from './CommonPlayerAction.module.scss';
import cn from 'classnames';
import { IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CommonRadioChannelButton from './components/CommonRadioChannelButton';
import IChannel from '../../../../../interfaces/IChannel';
import PushPinIcon from '@mui/icons-material/PushPin';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function CommonPlayerAction({
  className,
  channel,
  setOpenChannelMenu,
  isOpenChannelMenu,
  pinned,
  setPinned,
}: ICommonPlayerActionProps) {
  const onClick = () => {
    setPinned(!pinned);
  };
  return (
    <div className={cn(s.CommonPlayerAction, className)}>
      <IconButton
        disabled={Boolean(isOpenChannelMenu)}
        className={cn(s.pinned, { [s.isPinned]: !pinned })}
        onClick={onClick}
      >
        {pinned ? <PushPinIcon /> : <KeyboardArrowUpIcon />}
      </IconButton>
      <CommonRadioChannelButton
        isOpen={isOpenChannelMenu}
        onClick={() => setOpenChannelMenu(!isOpenChannelMenu)}
        title={channel?.attributes?.title}
        className={cn(s.channelButton)}
      />
      <IconButton className={cn(s.mobileMenuButton)}>
        <MoreHorizIcon />
      </IconButton>
    </div>
  );
}

CommonPlayerAction.defaultProps = {
  className: '',
};

interface ICommonPlayerActionProps {
  className?: string;
  channel: IChannel;
  isOpenChannelMenu: boolean | undefined | null;
  setOpenChannelMenu(v: boolean | undefined | null): any;
  pinned: boolean | undefined | null;
  setPinned(v: boolean): any;
}
