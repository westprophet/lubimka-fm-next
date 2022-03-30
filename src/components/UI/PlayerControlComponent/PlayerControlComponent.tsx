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
  type,
  disable,
}: IPlayerControlComponentProps) {
  return (
    <div
      className={cn(
        s.PlayerControlComponent,
        {
          [s.type1]: type === 1,
          [s.type2]: type === 2,
        },
        {
          [s.disable]: disable,
        },
        className
      )}
    >
      <CircularProgress
        className={cn(s.circular)}
        variant={status === 'loading' ? 'indeterminate' : 'determinate'}
        value={100}
      />
      <IconButton
        disabled={disable}
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
  type: 1,
  disable: false,
};

interface IPlayerControlComponentProps {
  className?: string;
  status: TAudioManagerStatus;
  disable?: boolean;
  type?: 1 | 2;
  play(): any;
  stop(): any;
}
