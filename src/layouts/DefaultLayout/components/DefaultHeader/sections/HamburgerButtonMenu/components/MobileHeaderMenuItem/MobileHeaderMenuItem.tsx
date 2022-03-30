/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './MobileHeaderMenuItem.module.scss';
import cn from 'classnames';
import IHeaderMenuItem from '../../../../interfaces/IHeaderMenuItem';

export default function MobileHeaderMenuItem({ className, item }: IMobileHeaderMenuItemProps) {
  return (
    <div className={cn(s.MobileHeaderMenuItem, className)}>
      <div>{item.title}</div>
    </div>
  );
}

MobileHeaderMenuItem.defaultProps = {
  className: '',
};

interface IMobileHeaderMenuItemProps {
  className?: string;
  item: IHeaderMenuItem;
}
