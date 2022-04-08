/**
 * Created by westp on 26.03.2022
 */

import React, { useState } from 'react';
import s from './HamburgerButtonMenu.module.scss';
import cn from 'classnames';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MENU_ITEMS from '../../constants/MENU_ITEMS';
import IHeaderMenuItem from '../../interfaces/IHeaderMenuItem';
import MobileHeaderMenuItem from './components/MobileHeaderMenuItem';

export default function HamburgerButtonMenu({ className }: IHamburgerButtonMenuProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={cn(s.HamburgerButtonMenu, className)}>
      <IconButton className={cn(s.button)} onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <aside className={cn(s.menu, { [s.open]: open })}>
        <div className={cn(s.inner)}>
          <div className={cn(s.head)}>
            <IconButton className={cn(s.button)} onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className={cn(s.items, 'with-screen-padding')}>
            {MENU_ITEMS.map((mi: IHeaderMenuItem) => (
              <MobileHeaderMenuItem key={mi.key} item={mi} />
            ))}
          </div>
          {/*<div className={cn(s.items, 'with-screen-padding')}>*/}
          {/*  */}
          {/*</div>*/}
        </div>
      </aside>
    </div>
  );
}

HamburgerButtonMenu.defaultProps = {
  className: '',
};

interface IHamburgerButtonMenuProps {
  className?: string;
}
