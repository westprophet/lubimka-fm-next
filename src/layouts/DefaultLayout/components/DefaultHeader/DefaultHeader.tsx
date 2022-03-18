/**
 * Created by westp on 17.03.2022
 */

import React from 'react';
import s from './DefaultHeader.module.scss';
import cn from 'classnames';

export default function DefaultHeader({ className }: IDefaultHeaderProps) {
  return (
    <div className={cn(s.DefaultHeader, className)}>
      <div></div>
    </div>
  );
}

DefaultHeader.defaultProps = {
  className: '',
};

interface IDefaultHeaderProps {
  className?: string;
}
