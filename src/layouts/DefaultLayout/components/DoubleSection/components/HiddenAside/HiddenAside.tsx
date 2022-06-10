/**
 * Created by westp on 08.06.2022
 */

import React, { forwardRef } from 'react';
import s from './HiddenAside.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

const variants = {
  show: { x: '0', transition: { duration: 0.3 } },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  stop: { x: '120%', transition: { duration: 0.3 } },
};

export const HiddenAside = forwardRef(({ className, side, open, children }: IHiddenAsideProps) => {
  return (
    <motion.div
      animate={open ? 'show' : 'stop'}
      variants={variants}
      className={cn(
        s.HiddenAside,
        { [s.left]: side === 'left', [s.right]: side === 'right' },
        className
      )}
    >
      {children}
    </motion.div>
  );
});

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
