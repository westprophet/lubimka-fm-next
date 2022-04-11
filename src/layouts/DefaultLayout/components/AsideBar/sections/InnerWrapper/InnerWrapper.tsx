/**
 * Created by westp on 11.04.2022
 */

import React from 'react';
import s from './InnerWrapper.module.scss';
import cn from 'classnames';

export default function InnerWrapper({ className, children }: IInnerWrapperProps) {
  return <div className={cn(s.InnerWrapper, className)}>{children}</div>;
}

InnerWrapper.defaultProps = {
  className: '',
};

interface IInnerWrapperProps {
  className?: string;
  children: any;
}
