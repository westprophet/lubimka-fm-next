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
    transition: { duration: 0.3 },
  },
  hidden: (side: 'left' | 'right') => ({
    x: side === 'right' ? '-100%' : '100%',
    transition: {
      duration: 0.3,
    },
  }),
};

export const HiddenAside = ({ className, side, open, children }: IHiddenAsideProps) => {
  return (
    <motion.div
      animate={open ? 'show' : 'hidden'}
      variants={variants}
      custom="left"
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
