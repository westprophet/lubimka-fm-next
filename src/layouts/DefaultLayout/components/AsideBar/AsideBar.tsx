/**
 * Created by westp on 28.03.2022
 */

import React from 'react';
import s from './AsideBar.module.scss';
import cn from 'classnames';

export default function AsideBar({ className, fixed, children, position }: IAsideBarProps) {
  return (
    <div
      className={cn(
        s.AsideBar,
        { [s.fixed]: fixed },
        { [s.left]: position === 'left', [s.right]: position === 'right' },
        className
      )}
    >
      <div>{children}</div>
    </div>
  );
}

AsideBar.defaultProps = {
  className: '',
  fixed: true,
};

interface IAsideBarProps {
  className?: string;
  children: any;
  fixed: boolean;
  position: 'left' | 'right';
}
