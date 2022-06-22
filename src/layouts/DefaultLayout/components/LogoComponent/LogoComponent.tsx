/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './LogoComponent.module.scss';
import cn from 'classnames';
import Link from 'next/link';
// import Logo from 'assets/logo.svg';

export default function LogoComponent({ className }: ILogoComponentProps) {
  return (
    <Link href="/">
      <a className={cn(s.LogoComponent, className)}>
        <div className={cn(s.logoContainer)}>
          <img className={cn(s.logoImg)} src={'/logo.svg'} alt={'logo lubimka FM'} />
        </div>
        <div className={cn(s.logoTitle)}>
          Lubimka
          <br />
          FM
        </div>
      </a>
    </Link>
  );
}

LogoComponent.defaultProps = {
  className: '',
};

interface ILogoComponentProps {
  className?: string;
}
