/**
 * Created by westp on 28.03.2022
 */

import React from 'react';
import s from './AsideBar.module.scss';
import cn from 'classnames';

export default function AsideBar({ className, fixed, children, position }: IAsideBarProps) {
  return (
    <aside
      className={cn(
        s.AsideBar,
        { fixed: fixed },
        { left: position === 'left', right: position === 'right' },
        className
      )}
    >
      {children}
    </aside>
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
