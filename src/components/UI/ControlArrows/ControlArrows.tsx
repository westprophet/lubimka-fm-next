/**
 * Created by westp on 21.03.2022
 */

import React from 'react';
import s from './ControlArrows.module.scss';
import cn from 'classnames';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

export default function ControlArrows({
  className,
  onClickRight,
  onClickLeft,
  classNameL,
  classNameR,
}: IControlArrowsProps) {
  return (
    <div className={cn(s.ControlArrows, className)}>
      <IconButton onClick={onClickLeft} className={cn(s.leftButton, classNameL)}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton onClick={onClickRight} className={cn(s.rightButton, classNameR)}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
}

ControlArrows.defaultProps = {
  className: '',
  classNameL: '',
  classNameR: '',
};

interface IControlArrowsProps {
  className?: string;
  classNameL?: string;
  classNameR?: string;
  onClickRight(): any;
  onClickLeft(): any;
}
