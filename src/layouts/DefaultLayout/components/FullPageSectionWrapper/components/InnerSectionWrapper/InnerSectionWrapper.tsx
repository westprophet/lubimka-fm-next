/**
 * Created by westp on 02.04.2022
 */

import React from 'react';
import s from './InnerSectionWrapper.module.scss';
import cn from 'classnames';

export default function InnerSectionWrapper({ className, children }: IInnerSectionWrapperProps) {
  return <div className={cn(s.InnerSectionWrapper, className)}>{children}</div>;
}

InnerSectionWrapper.defaultProps = {
  className: '',
};

interface IInnerSectionWrapperProps {
  className?: string;
  children: any;
}
