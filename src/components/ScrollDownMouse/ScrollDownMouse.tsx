/**
 * Created by westp on 10.07.2022
 */

import React from 'react';
import s from './ScrollDownMouse.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

const variants = {
  show: {
    opacity: 0.2,
    transition: {
      delay: 2,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export default function ScrollDownMouse({ className }: IScrollDownMouseProps) {
  return (
    <motion.svg
      className={cn(s.ScrollDownMouse, className)}
      viewBox="0 0 247 390"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      variants={variants}
      animate="show"
      initial="hidden"
    >
      <motion.path
        id="wheel"
        d="M123.359,79.775l0,72.843"
        stroke="currentColor"
        strokeWidth="20px"
        animate={{ y: '20%' }}
        transition={{ repeat: Infinity, duration: 2 }}
        initial="hidden"
      />
      <motion.path
        id="mouse"
        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
        fill="none"
        strokeWidth="20px"
        stroke="currentColor"
      />
    </motion.svg>
  );
}

ScrollDownMouse.defaultProps = {
  className: '',
};

interface IScrollDownMouseProps {
  className?: string;
}
