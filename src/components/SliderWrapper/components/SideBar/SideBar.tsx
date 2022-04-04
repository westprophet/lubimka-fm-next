/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './SideBar.module.scss';
import cn from 'classnames';
import ArrowButton from 'components/UI/buttons/ArrowButton';

export default function SideBar({ className, onClick, side }: ISideBarProps) {
  return (
    <div
      className={cn(
        s.SideBar,
        { [s.left]: side === 'left', [s.right]: side === 'right' },
        className
      )}
      onClick={onClick}
    >
      <ArrowButton className={cn(s.arrow, s.leftArrow)} side={side} />
    </div>
  );
}

SideBar.defaultProps = {
  className: '',
  side: 'left',
  onClick: () => {},
};

interface ISideBarProps {
  className?: string;
  side?: 'left' | 'right';
  onClick?(): any;
}
