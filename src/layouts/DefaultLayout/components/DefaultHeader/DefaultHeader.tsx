/**
 * Created by westp on 17.03.2022
 */

import React from 'react';
import s from './DefaultHeader.module.scss';
import cn from 'classnames';
import LogoComponent from './components/LogoComponent';
import HamburgerButtonMenu from './sections/HamburgerButtonMenu';
import HeaderDesktopMenu from './sections/HeaderDesktopMenu';

export default function DefaultHeader({ className }: IDefaultHeaderProps) {
  return (
    <div className={cn(s.DefaultHeader, 'with-screen-padding', className)}>
      <LogoComponent />
      <HamburgerButtonMenu className={cn(s.mobile)} />
      <HeaderDesktopMenu className={cn(s.desktop)} />
    </div>
  );
}

DefaultHeader.defaultProps = {
  className: '',
};

interface IDefaultHeaderProps {
  className?: string;
}
