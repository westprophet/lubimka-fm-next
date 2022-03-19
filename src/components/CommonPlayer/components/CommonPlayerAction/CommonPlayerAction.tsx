/**
 * Created by westp on 19.03.2022
 */

import React from 'react';
import s from './CommonPlayerAction.module.scss';
import cn from 'classnames';
import { IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CommonRadioChannelButton from 'components/CommonPlayer/components/CommonPlayerAction/components/CommonRadioChannelButton';
import IChannel from '../../../../interfaces/IChannel';

export default function CommonPlayerAction({
  className,
  channel,
  setOpenChannelMenu,
  isOpenChannelMenu,
}: ICommonPlayerActionProps) {
  return (
    <div className={cn(s.CommonPlayerAction, className)}>
      <CommonRadioChannelButton
        isOpen={isOpenChannelMenu}
        onClick={() => setOpenChannelMenu(!isOpenChannelMenu)}
        channel={channel}
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
  isOpenChannelMenu: boolean;
  setOpenChannelMenu(v: boolean): any;
}
