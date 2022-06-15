/**
 * Created by westp on 08.06.2022
 */

import React from 'react';
import s from './HiddenAside.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

const variants = {
  show: {
    x: '0',
    transition: { duration: 0.5 },
  },
  hidden: {
    x: '100%',
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      display: 'none',
      transition: {
        delay: 1,
      },
    },
  },
};

export const HiddenAside = ({ className, side, open, children }: IHiddenAsideProps) => {
  return (
    <motion.div
      animate={open ? 'show' : 'hidden'}
      variants={variants}
      initial={'hidden'}
      className={cn(
        s.HiddenAside,
        { [s.left]: side === 'left', [s.right]: side === 'right' },
        className
      )}
    >
      {children}
    </motion.div>
  );
};

HiddenAside.defaultProps = {
  className: '',
  side: 'right',
  open: false,
};

interface IHiddenAsideProps {
  className?: string;
  open: boolean;
  children: any;
  side?: 'left' | 'right';
}
export default HiddenAside;
