/**
 * Created by westp on 09.04.2022
 */

import React from 'react';
import s from './GetApplicationButton.module.scss';
import cn from 'classnames';
import { Button } from '@mui/material';

export default function GetApplicationButton({
  className,
  type,
  onClick,
}: IGetApplicationButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        s.GetApplicationButton,
        { [s.google]: type === 'google-play', [s.appstore]: type === 'app-store' },
        className
      )}
    />
  );
}

GetApplicationButton.defaultProps = {
  className: '',
};

interface IGetApplicationButtonProps {
  onClick?(): any;
  className?: string;
  type: 'google-play' | 'app-store';
}
