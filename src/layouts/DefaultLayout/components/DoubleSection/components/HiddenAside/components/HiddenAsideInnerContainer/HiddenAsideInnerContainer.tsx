/**
 * Created by westp on 08.06.2022
 */

import React from 'react';
import s from './HiddenAsideInnerContainer.module.scss';
import cn from 'classnames';

export default function HiddenAsideInnerContainer({ className, children }: IHiddenAsideInnerProps) {
  return <div className={cn(s.HiddenAsideInnerContainer, className)}>{children}</div>;
}

HiddenAsideInnerContainer.defaultProps = {
  className: '',
};

interface IHiddenAsideInnerProps {
  className?: string;
  children: any;
}
