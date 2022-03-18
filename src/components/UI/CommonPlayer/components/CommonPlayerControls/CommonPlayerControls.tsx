/**
 * Created by westp on 18.03.2022
 */

import React from 'react';
import s from './CommonPlayerControls.module.scss';
import cn from 'classnames';

import { PlayArrow, Pause } from '@mui/icons-material/';
import { CircularProgress, IconButton } from '@mui/material';
import { TAudioManagerStatus } from '../../../../../types/TAudioManagerStatus';

export default function CommonPlayerControls({
  className,
  status,
  play,
  stop,
}: ICommonPlayerControlsProps) {
  return (
    <div className={cn(s.CommonPlayerControls, className)}>
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

CommonPlayerControls.defaultProps = {
  className: '',
};

interface ICommonPlayerControlsProps {
  className?: string;
  status: TAudioManagerStatus;
  play(): any;
  stop(): any;
}
