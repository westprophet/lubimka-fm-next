/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './ArrowButton.module.scss';
import cn from 'classnames';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ArrowButton({ className, onClick, side }: IArrowButtonProps) {
  return (
    <IconButton onClick={onClick} className={cn(s.ArrowButton, className)}>
      {side === 'left' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
    </IconButton>
  );
}

ArrowButton.defaultProps = {
  className: '',
  side: 'left',
  onClick: () => {},
};

interface IArrowButtonProps {
  className?: string;
  side?: 'left' | 'right';
  onClick?(): any;
}
