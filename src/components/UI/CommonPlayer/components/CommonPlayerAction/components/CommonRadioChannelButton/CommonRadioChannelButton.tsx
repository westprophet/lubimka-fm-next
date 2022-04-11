/**
 * Created by westp on 19.03.2022
 */

import React from 'react';
import s from './CommonRadioChannelButton.module.scss';
import cn from 'classnames';
import IChannel from '../../../../../../../interfaces/IChannel';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Button } from '@mui/material';

export default function CommonRadioChannelButton({
  className,
  channel,
  onClick,
  isOpen,
}: ICommonRadioChannelButtonProps) {
  return (
    <div className={cn(s.CommonRadioChannelButton, className)}>
      <Button variant="text" onClick={onClick}>
        <ExpandLessIcon className={cn(s.arrow, { [s.open]: isOpen })} />
        <span>{channel.attributes.title}</span>
      </Button>
    </div>
  );
}

CommonRadioChannelButton.defaultProps = {
  className: '',
};

interface ICommonRadioChannelButtonProps {
  className?: string;
  channel: IChannel;
  isOpen: boolean;
  onClick(): any;
}
