/**
 * Created by westp on 08.06.2022
 */

import React from 'react';
import s from './HiddenAsideScroller.module.scss';
import cn from 'classnames';

export default function HiddenAsideScroller({ className, children }: IHiddenAsideScrollerProps) {
  return (
    <div className={cn(s.HiddenAsideScroller)}>
      <div className={cn(s.inner, className)}>{children}</div>
    </div>
  );
}

HiddenAsideScroller.defaultProps = {
  className: '',
};

interface IHiddenAsideScrollerProps {
  className?: string;
  children: any;
}
