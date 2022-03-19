/**
 * Created by westp on 19.03.2022
 */

import React from 'react';
import s from './ChannelMenuSelector.module.scss';
import cn from 'classnames';

export default function ChannelMenuSelector({ className, isOpen }: IChannelMenuSelectorProps) {
  return (
    <div className={cn(s.ChannelMenuSelector, { [s.open]: isOpen }, className)}>
      <div></div>
    </div>
  );
}

ChannelMenuSelector.defaultProps = {
  className: '',
  // isOpen: true,
};

interface IChannelMenuSelectorProps {
  className?: string;
  isOpen: boolean;
}
