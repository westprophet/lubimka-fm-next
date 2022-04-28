/**
 * Created by westp on 27.04.2022
 */

import React from 'react';
import s from './GridSection.module.scss';
import cn from 'classnames';

export default function GridSection({ className, children, dense }: IGridSectionProps) {
  return (
    <div className={cn(s.GridSection, { [s.dense]: dense }, className)}>
      <div className={cn(s.inner)}>{children}</div>
    </div>
  );
}

GridSection.defaultProps = {
  className: '',
};

interface IGridSectionProps {
  className?: string;
  children: any;
  dense?: boolean;
}
