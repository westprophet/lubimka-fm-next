/**
 * Created by westp on 07.04.2022
 */

import React from 'react';
import s from './PlayIconButton.module.scss';
import cn from 'classnames';
import { IconButton } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import { TAudioManagerStatus } from '../../../../types/TAudioManagerStatus';

export default function PlayIconButton({
  className,
  onClick,
  status,
  disabled,
}: IPlayIconButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      className={cn(
        s.PlayIconButton,
        {
          [s.paused]: status === 'paused',
          [s.played]: status === 'played' || status === 'loading',
        },
        className
      )}
    >
      {status === 'paused' ? <PlayArrow /> : <Pause />}
    </IconButton>
  );
}

PlayIconButton.defaultProps = {
  className: '',
  disabled: false,
};

interface IPlayIconButtonProps {
  className?: string;
  status: TAudioManagerStatus;
  onClick(): any;
  disabled?: boolean;
}
