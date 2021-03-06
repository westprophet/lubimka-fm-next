/**
 * Created by westp on 18.03.2022
 */

import React from 'react';
import s from './NoCover.module.scss';
import cn from 'classnames';
// import { ReactSVG } from 'react-svg';

import Logo from 'assets/logo.svg';

export default function NoCover({ className }: INoCoverProps) {
  return (
    <div className={cn(s.NoCover, className)}>
      <Logo className={cn(s.svg)} />
      {/*<ReactSVG className={cn(s.svg)} src={logo} />*/}
    </div>
  );
}

NoCover.defaultProps = {
  className: '',
};

interface INoCoverProps {
  className?: string;
}
