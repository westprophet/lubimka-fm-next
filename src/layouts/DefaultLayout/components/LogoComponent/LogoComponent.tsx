/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './LogoComponent.module.scss';
import cn from 'classnames';
// import Logo from 'assets/logo.svg';

export default function LogoComponent({ className }: ILogoComponentProps) {
  return (
    <a href="/" className={cn(s.LogoComponent, className)}>
      {/*<Logo className={cn(s.logoImg)} />*/}
      <div className={cn(s.logoContainer)}>
        <img className={cn(s.logoImg)} src={'/logo.svg'} alt={'header logo lubimka'} />
      </div>
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
