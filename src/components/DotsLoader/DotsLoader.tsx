/**
 * Created by westp on 01.05.2022
 */

import React from 'react';
import s from './DotsLoader.module.scss';
import cn from 'classnames';

export default function DotsLoader({ className }: IDotsLoaderProps) {
  return (
    <div className={cn(s.DotsLoader, className)}>
      <div className={cn(s.loader)}></div>
    </div>
  );
}

DotsLoader.defaultProps = {
  className: '',
};

interface IDotsLoaderProps {
  className?: string;
}
