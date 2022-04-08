/**
 * Created by westp on 07.04.2022
 */

import React from 'react';
import s from './BigPlayButton.module.scss';
import cn from 'classnames';
import { TAudioManagerStatus } from '../../../../../../types/TAudioManagerStatus';
import PlayIconButton from 'components/UI/buttons/PlayIconButton';
import { CircularProgress } from '@mui/material';

export default function BigPlayButton({ className, onClick, status }: IBigPlayButtonProps) {
  return (
    <div className={cn(s.BigPlayButton, { [s.loading]: status === 'loading' }, className)}>
      <div className={cn(s.inner)}>
        <PlayIconButton status={status} onClick={onClick} />
        <CircularProgress
          className={cn(s.circular, { [s.loadingCirc]: status === 'loading' })}
          variant={'indeterminate'}
        />
      </div>
    </div>
  );
}

BigPlayButton.defaultProps = {
  className: '',
};

interface IBigPlayButtonProps {
  className?: string;
  status: TAudioManagerStatus;

  onClick(): any;
}
