/**
 * Created by westp on 08.06.2022
 */

import React from 'react';
import s from './HiddenAside.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { Backdrop } from '@mui/material';

const variants = {
  show: {
    x: 0,
    transition: { duration: 0.3 },
  },
  hidden: (side: 'left' | 'right') => ({
    x: side === 'right' ? '100%' : '-100%',
    transition: {
      duration: 0.3,
    },
  }),
};

export const HiddenAside = ({ className, side, open, children, onClose }: IHiddenAsideProps) => {
  return (
    <>
      <motion.div
        animate={open ? 'show' : 'hidden'}
        variants={variants}
        custom={side}
        initial={'hidden'}
        className={cn(
          s.HiddenAside,
          { [s.left]: side === 'left', [s.right]: side === 'right' },
          className
        )}
      >
        {children}
      </motion.div>
      <Backdrop open={open} onClick={onClose} />
    </>
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
  onClose(): any;
  children: any;
  side?: 'left' | 'right';
}

export default HiddenAside;
