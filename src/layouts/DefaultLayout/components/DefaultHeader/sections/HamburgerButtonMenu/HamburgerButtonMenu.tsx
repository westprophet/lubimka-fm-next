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
import { MMobileHeaderMenuItem as MobileHeaderMenuItem } from './components/MobileHeaderMenuItem';
import { motion } from 'framer-motion';

const container = {
  hidden: {
    x: '100%',
    transition: {
      x: {
        linear: 1,
      },
    },
  },
  show: {
    x: 0,
    transition: {
      x: {
        linear: 1,
      },
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const head = {
  hidden: { y: '-100%' },
  show: {
    y: 0,
  },
};

const item = {
  hidden: { opacity: 0, x: '20%' },
  show: {
    opacity: 1,
    x: 0,
  },
};

export default function HamburgerButtonMenu({ className }: IHamburgerButtonMenuProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={cn(s.HamburgerButtonMenu, className)}>
      <div>
        <IconButton className={cn(s.button)} onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      </div>
      <motion.aside
        className={cn(s.menu)}
        variants={container}
        initial="hidden"
        animate={open ? 'show' : 'hidden'}
      >
        <div className={cn(s.inner)}>
          <motion.div className={cn(s.head)} variants={head}>
            <IconButton className={cn(s.button)} onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </motion.div>
          <div className={cn(s.items, 'with-screen-padding')}>
            {MENU_ITEMS.map((mi: IHeaderMenuItem) => (
              <MobileHeaderMenuItem key={mi.key} item={mi} variants={item} />
            ))}
          </div>
        </div>
      </motion.aside>
    </div>
  );
}

HamburgerButtonMenu.defaultProps = {
  className: '',
};

interface IHamburgerButtonMenuProps {
  className?: string;
}
