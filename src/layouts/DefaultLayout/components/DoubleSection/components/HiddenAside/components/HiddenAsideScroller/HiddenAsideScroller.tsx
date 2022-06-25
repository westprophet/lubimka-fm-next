/**
 * Created by westp on 08.06.2022
 */

import React, { forwardRef, LegacyRef } from 'react';
import s from './HiddenAsideScroller.module.scss';
import cn from 'classnames';

export const HiddenAsideScroller = forwardRef(
  (
    { className, children }: IHiddenAsideScrollerProps,
    ref: LegacyRef<HTMLDivElement> | undefined
  ) => {
    return (
      <div ref={ref} className={cn(s.HiddenAsideScroller)}>
        <div className={cn(s.inner, className)}>{children}</div>
      </div>
    );
  }
);

HiddenAsideScroller.defaultProps = {
  className: '',
};

interface IHiddenAsideScrollerProps {
  className?: string;
  children: any;
}
export default HiddenAsideScroller;
