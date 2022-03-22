/**
 * Created by westp on 22.03.2022
 */

import React from 'react';
import s from './PlayerControlComponent.module.scss';
import cn from 'classnames';
import { CircularProgress, IconButton } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import { TAudioManagerStatus } from '../../../types/TAudioManagerStatus';

export default function PlayerControlComponent({
  className,
  status,
  play,
  stop,
}: IPlayerControlComponentProps) {
  return (
    <div className={cn(s.PlayerControlComponent, className)}>
      <CircularProgress
        className={cn(s.circular)}
        variant={status === 'loading' ? 'indeterminate' : 'determinate'}
        value={100}
      />
      <IconButton
        onClick={() => {
          if (status === 'paused') play();
          else stop();
        }}
      >
        {status === 'paused' ? <PlayArrow /> : <Pause />}
      </IconButton>
    </div>
  );
}

PlayerControlComponent.defaultProps = {
  className: '',
};

interface IPlayerControlComponentProps {
  className?: string;
  status: TAudioManagerStatus;
  play(): any;
  stop(): any;
}
