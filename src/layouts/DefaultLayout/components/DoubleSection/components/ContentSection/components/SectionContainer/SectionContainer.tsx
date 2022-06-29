/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './SectionContainer.module.scss';
import cn from 'classnames';
import SectionContainerTitle from '../SectionContainerTitle';
import { motion } from 'framer-motion';

const variantHead = {
  show: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    y: '-100%',
    opacity: 0,
  },
};

export default function SectionContainer({
  className,
  children,
  colorType,
  title,
  index,
  delay,
}: ISectionContainerProps) {
  const _delay = delay ?? 0.5;
  const variants = {
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: _delay + i * 0.2,
        duration: 0.3,
        staggerChildren: _delay,
        delayChildren: 0.7 + i * 0.2,
      },
      default: {
        transition: {
          delay: 0.5,
        },
      },
    }),
    hidden: {
      y: '10%',
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={variants}
      animate="show"
      initial="hidden"
      custom={index}
      className={cn(
        s.SectionContainer,
        {
          [s.colorType1]: colorType === 1,
          [s.colorType2]: colorType === 2,
          [s.colorType3]: colorType === 3,
        },
        className
      )}
    >
      <motion.div className={cn(s.line)} variants={variantHead}>
        <span></span>
      </motion.div>
      {title && <SectionContainerTitle>{title}</SectionContainerTitle>}
      {children}
    </motion.div>
  );
}

SectionContainer.defaultProps = {
  className: '',
  colorType: 1,
  delay: 0.5,
};

interface ISectionContainerProps {
  className?: string;
  children: any;
  colorType?: 1 | 2 | 3;
  title?: any;
  delay?: number;
  index?: number;
}
