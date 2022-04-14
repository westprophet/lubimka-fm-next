/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './NoImage.module.scss';
import cn from 'classnames';
// import logo from 'assets/logo.svg';
export default function NoImage({ className }: INoImageProps) {
  return (
    <div className={cn(s.NoImage, className)}>
      <img src="/logo.svg" alt="no image logo lubimka" />
    </div>
  );
}

NoImage.defaultProps = {
  className: '',
};

interface INoImageProps {
  className?: string;
}
