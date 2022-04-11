/**
 * Created by westp on 11.04.2022
 */

import React from 'react';
import s from './TopContainerWrapper.module.scss';
import cn from 'classnames';

export default function TopContainerWrapper({ className, children }: ITopContainerProps) {
  return <div className={cn(s.TopContainerWrapper, className)}>{children}</div>;
}

TopContainerWrapper.defaultProps = {
  className: '',
};

interface ITopContainerProps {
  className?: string;
  children: any;
}
