/**
 * Created by westp on 19.03.2022
 */

import React from 'react';
import s from './CommonRadioChannelButton.module.scss';
import cn from 'classnames';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Button } from '@mui/material';

export default function CommonRadioChannelButton({
  className,
  title,
  onClick,
  isOpen,
}: ICommonRadioChannelButtonProps) {
  if (!title) return null;
  return (
    <div className={cn(s.CommonRadioChannelButton, className)}>
      <Button key={title} variant="text" onClick={onClick}>
        <ExpandLessIcon className={cn(s.arrow, { [s.open]: isOpen })} />
        <span suppressHydrationWarning>{title}</span>
      </Button>
    </div>
  );
}

CommonRadioChannelButton.defaultProps = {
  className: '',
};

interface ICommonRadioChannelButtonProps {
  className?: string;
  title: string;
  isOpen?: boolean | null;
  onClick(): any;
}
