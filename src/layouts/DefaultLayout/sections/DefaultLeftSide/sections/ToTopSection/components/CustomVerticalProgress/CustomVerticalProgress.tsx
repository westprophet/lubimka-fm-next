/**
 * Created by westp on 30.03.2022
 */

import React from 'react';
import s from './CustomVerticalProgress.module.scss';
import cn from 'classnames';

export default function CustomVerticalProgress({ className, p }: ICustomVerticalProgressProps) {
  return (
    <div className={cn(s.CustomVerticalProgress, className)}>
      <div className={cn(s.fill)} style={{ height: `${p}%` }} />
    </div>
  );
}

CustomVerticalProgress.defaultProps = {
  className: '',
};

interface ICustomVerticalProgressProps {
  className?: string;
  p: number;
}
