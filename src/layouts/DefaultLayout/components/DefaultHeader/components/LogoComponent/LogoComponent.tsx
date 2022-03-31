/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './LogoComponent.module.scss';
import cn from 'classnames';
import logo from 'assets/logo.svg';

export default function LogoComponent({ className }: ILogoComponentProps) {
  return (
    <a href="/" className={cn(s.LogoComponent, className)}>
      <img className={cn(s.logoImg)} src={logo} alt={'header logo lubimka'} />
      <div className={cn(s.logoTitle)}>
        Radio
        <br />
        Lubimka
      </div>
    </a>
  );
}

LogoComponent.defaultProps = {
  className: '',
};

interface ILogoComponentProps {
  className?: string;
}
