/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './PlayButton.module.scss';
import cn from 'classnames';
import { TAudioManagerStatus } from '../../../../types/TAudioManagerStatus';
import { CircularProgress, IconButton } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import PlayIconButton from 'components/UI/buttons/PlayIconButton';

export default function PlayButton({
  className,
  status,
  onClick,
  type,
  disable,
  sm,
  md,
  lg,
}: IPlayButtonProps) {
  return (
    <div
      className={cn(
        s.PlayButton,
        {
          [s.type1]: type === 1,
          [s.type2]: type === 2,
        },
        {
          sm: sm,
          md: md,
          lg: lg,
        },
        {
          [s.disable]: disable,
        },
        className
      )}
    >
      <CircularProgress
        className={cn(s.circular, { [s.loadingCirc]: status === 'loading' })}
        variant={status === 'loading' ? 'indeterminate' : 'determinate'}
        value={100}
      />
      <PlayIconButton status={status} onClick={onClick} disabled={disable} />
    </div>
  );
}

PlayButton.defaultProps = {
  className: '',
  type: 1,
  disable: false,
  xs: true,
  sm: true,
  md: true,
  lg: true,
};

interface IPlayButtonProps {
  className?: string;
  status: TAudioManagerStatus;
  disable?: boolean;
  type?: 1 | 2;
  onClick(): any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}
