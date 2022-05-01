/**
 * Created by westp on 07.04.2022
 */

import React from 'react';
import s from './PlayIconButton.module.scss';
import cn from 'classnames';
import { IconButton } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';

export default function PlayIconButton({
  className,
  onClick,
  // status,
  isPlay,
  disabled,
}: IPlayIconButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      className={cn(
        s.PlayIconButton,
        {
          [s.paused]: !isPlay,
          [s.played]: isPlay,
        },
        className
      )}
    >
      {!isPlay ? <PlayArrow /> : <Pause />}
    </IconButton>
  );
}

PlayIconButton.defaultProps = {
  className: '',
  disabled: false,
};

interface IPlayIconButtonProps {
  className?: string;
  isPlay: boolean;
  // status: TAudioManagerStatus;
  onClick(): any;
  disabled?: boolean;
}
