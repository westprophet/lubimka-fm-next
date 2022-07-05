/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './HeaderDesktopMenu.module.scss';
import cn from 'classnames';
import MENU_ITEMS from '../../constants/MENU_ITEMS';
import IHeaderMenuItem from '../../interfaces/IHeaderMenuItem';
import DesktopHeaderMenuItem from './components/DesktopHeaderMenuItem';

export default function HeaderDesktopMenu({ className }: IHeaderDesctopMenuProps) {
  return (
    <div className={cn(s.HeaderDesktopMenu, className)}>
      <div className={cn(s.inner)}>
        <div className={cn(s.items)}>
          {MENU_ITEMS.map((mi: IHeaderMenuItem) => (
            <DesktopHeaderMenuItem key={mi.key} title={mi.title} link={mi.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

HeaderDesktopMenu.defaultProps = {
  className: '',
};

interface IHeaderDesctopMenuProps {
  className?: string;
}
