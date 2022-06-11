/**
 * Created by westp on 17.03.2022
 */

import React from 'react';
import s from './DefaultHeader.module.scss';
import cn from 'classnames';
import LogoComponent from '../LogoComponent';
import HamburgerButtonMenu from './sections/HamburgerButtonMenu';
import HeaderDesktopMenu from './sections/HeaderDesktopMenu';

function DefaultHeader({ className, show, transparent, fixed }: IDefaultHeaderProps) {
  return (
    <header
      className={cn(
        s.DefaultHeader,
        { [s.show]: show },
        { [s.transparent]: transparent },
        { [s.fixed]: fixed },
        className
      )}
    >
      <LogoComponent />
      <HamburgerButtonMenu className={cn(s.mobile)} />
      <HeaderDesktopMenu className={cn(s.desktop)} />
    </header>
  );
}

DefaultHeader.defaultProps = {
  className: '',
  show: true,
  transparent: false,
  fixed: false,
};

interface IDefaultHeaderProps {
  className?: string;
  fixed?: boolean;
  show?: boolean;
  transparent?: boolean;
}
export default DefaultHeader;
