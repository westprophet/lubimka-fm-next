/**
 * Created by westp on 17.03.2022
 */

import React from 'react';
import s from './DefaultHeader.module.scss';
import cn from 'classnames';
import LogoComponent from '../LogoComponent';
// import HamburgerButtonMenu from './sections/HamburgerButtonMenu';

const HamburgerButtonMenu = dynamic(() => import('./sections/HamburgerButtonMenu'), {
  ssr: false,
});

import HeaderDesktopMenu from './sections/HeaderDesktopMenu';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import useBreakpoint from 'hooks/useBreakpoint';

export const variants = {
  visible: {
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
  hidden: {
    y: '-100%',
    transition: {
      duration: 0.2,
    },
  },
};

function DefaultHeader({ className, show, transparent, fixed }: IDefaultHeaderProps) {
  const b = useBreakpoint();
  return (
    <motion.header
      variants={variants}
      initial="hidden"
      animate={show ? 'visible' : 'hidden'}
      className={cn(
        s.DefaultHeader,
        { [s.show]: show },
        { [s.transparent]: transparent },
        { [s.fixed]: fixed },
        className
      )}
    >
      <LogoComponent className={cn(s.logo)} />
      {b.lg ? null : <HamburgerButtonMenu />}
      {b.lg ? <HeaderDesktopMenu /> : null}
    </motion.header>
  );
}

DefaultHeader.defaultProps = {
  className: '',
  show: true,
  transparent: false,
  fixed: false,
};

interface IDefaultHeaderProps {
  className?: string;
  fixed?: boolean;
  show?: boolean;
  transparent?: boolean;
}
export default DefaultHeader;
