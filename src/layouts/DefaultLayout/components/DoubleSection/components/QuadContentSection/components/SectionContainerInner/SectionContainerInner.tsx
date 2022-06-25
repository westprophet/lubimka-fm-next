/**
 * Created by westp on 08.06.2022
 */

import React, { forwardRef } from 'react';
import s from './SectionContainerInner.module.scss';
import cn from 'classnames';

export const SectionContainerInner = forwardRef(
  ({ className, children, withHorizontalPadding }: ISectionContainerInnerProps, ref: any) => {
    return (
      <div className={cn(s.SCI, { [s.withHorizontalPadding]: withHorizontalPadding })}>
        <div ref={ref} className={cn(s.content, className)}>
          {children}
        </div>
      </div>
    );
  }
);

SectionContainerInner.defaultProps = {
  className: '',
  withHorizontalPadding: true,
};

interface ISectionContainerInnerProps {
  className?: string;
  children: any;
  withHorizontalPadding?: boolean;
}

export default SectionContainerInner;
