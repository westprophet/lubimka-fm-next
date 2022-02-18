/**
 * Created by westprophet on 13.02.2022
 */

import React from 'react';
import s from './CommonPlayer.module.scss';
import cn from 'classnames';

export default function CommonPlayer({ className }: ICommonPlayerProps) {
  return (
    <div className={cn(s.CommonPlayer, className)}>
      <div />
    </div>
  );
}

CommonPlayer.defaultProps = {
  className: '',
};

interface ICommonPlayerProps {
  className?: string;
}
