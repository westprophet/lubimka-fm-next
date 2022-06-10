/**
 * Created by westp on 08.06.2022
 */

import React from 'react';
import s from './HiddenAsideInner.module.scss';
import cn from 'classnames';

export default function HiddenAsideInner({ className, children }: IHiddenAsideInnerProps) {
  return <div className={cn(s.HiddenAsideInner, className)}>{children}</div>;
}

HiddenAsideInner.defaultProps = {
  className: '',
};

interface IHiddenAsideInnerProps {
  className?: string;
  children: any;
}
