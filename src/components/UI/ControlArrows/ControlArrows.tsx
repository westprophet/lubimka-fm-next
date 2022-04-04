/**
 * Created by westp on 21.03.2022
 */

import React from 'react';
import s from './ControlArrows.module.scss';
import cn from 'classnames';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import ArrowButton from 'components/UI/buttons/ArrowButton';

export default function ControlArrows({
  className,
  onClickRight,
  onClickLeft,
  classNameL,
  classNameR,
}: IControlArrowsProps) {
  return (
    <div className={cn(s.ControlArrows, className)}>
      <ArrowButton onClick={onClickLeft} className={cn(s.leftButton, classNameL)} side="left" />
      <ArrowButton onClick={onClickRight} className={cn(s.rightButton, classNameR)} side="right" />
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
