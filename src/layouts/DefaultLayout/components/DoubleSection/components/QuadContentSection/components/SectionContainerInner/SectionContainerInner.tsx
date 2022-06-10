/**
 * Created by westp on 08.06.2022
 */

import React from 'react';
import s from './SectionContainerInner.module.scss';
import cn from 'classnames';

export default function SectionContainerInner({
  className,
  children,
  withHorizontalPadding,
}: ISectionContainerInnerProps) {
  return (
    <div className={cn(s.SCI, { [s.withHorizontalPadding]: withHorizontalPadding })}>
      <div className={cn(s.content, className)}>{children}</div>
    </div>
  );
}

SectionContainerInner.defaultProps = {
  className: '',
  withHorizontalPadding: true,
};

interface ISectionContainerInnerProps {
  className?: string;
  children: any;
  withHorizontalPadding: boolean;
}
