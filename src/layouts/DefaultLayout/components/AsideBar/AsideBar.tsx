/**
 * Created by westp on 28.03.2022
 */

import React, { forwardRef } from 'react';
import s from './AsideBar.module.scss';
import cn from 'classnames';

const AsideBar = forwardRef(
  (
    { className, fixed, children, position }: IAsideBarProps,
    ref: React.LegacyRef<HTMLDivElement> | undefined
  ) => {
    return (
      <aside
        ref={ref}
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
);

AsideBar.defaultProps = {
  className: '',
  fixed: true,
};

interface IAsideBarProps {
  className?: string;
  children: any;
  fixed?: boolean;
  position: 'left' | 'right';
}

export default AsideBar;
