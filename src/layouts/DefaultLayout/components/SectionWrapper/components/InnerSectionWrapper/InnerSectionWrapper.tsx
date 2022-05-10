/**
 * Created by westp on 02.04.2022
 */

import React from 'react';
import s from './InnerSectionWrapper.module.scss';
import cn from 'classnames';

export default function InnerSectionWrapper({
  className,
  children,
  disableHorizontalPadding,
}: IInnerSectionWrapperProps) {
  return (
    <div className={cn(s.InnerSectionWrapper, { [s.dh]: disableHorizontalPadding }, className)}>
      {children}
    </div>
  );
}

InnerSectionWrapper.defaultProps = {
  className: '',
  disableHorizontalPadding: false,
};

interface IInnerSectionWrapperProps {
  className?: string;
  children: any;
  disableHorizontalPadding: boolean;
}
