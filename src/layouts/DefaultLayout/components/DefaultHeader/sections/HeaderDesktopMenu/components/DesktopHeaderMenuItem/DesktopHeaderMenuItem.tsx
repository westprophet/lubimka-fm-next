/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './DesktopHeaderMenuItem.module.scss';
import cn from 'classnames';
import IHeaderMenuItem from '../../../../interfaces/IHeaderMenuItem';

export default function DesktopHeaderMenuItem({ className, item }: IDesktopHeaderMenuItemProps) {
  return (
    <div className={cn(s.DesktopHeaderMenuItem, className)}>
      <div>{item.title}</div>
    </div>
  );
}

DesktopHeaderMenuItem.defaultProps = {
  className: '',
};

interface IDesktopHeaderMenuItemProps {
  className?: string;
  item: IHeaderMenuItem;
}
