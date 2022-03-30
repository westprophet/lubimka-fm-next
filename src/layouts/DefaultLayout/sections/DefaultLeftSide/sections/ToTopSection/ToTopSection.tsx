/**
 * Created by westp on 28.03.2022
 */

import React from 'react';
import s from './ToTopSection.module.scss';
import cn from 'classnames';
import LinearProgress from '@mui/material/LinearProgress';

export default function ToTopSection({ className }: IToTopSectionProps) {
  return (
    <div className={cn(s.ToTopSection, className)}>
      <span className={cn(s.label)}>На верх</span>
      {/*<div className={cn(s.line)} />*/}
      <div className={cn(s.lineContainer)}>
        <LinearProgress value={50} className={cn(s.line)} variant="determinate" />
      </div>
    </div>
  );
}

ToTopSection.defaultProps = {
  className: '',
};

interface IToTopSectionProps {
  className?: string;
}
