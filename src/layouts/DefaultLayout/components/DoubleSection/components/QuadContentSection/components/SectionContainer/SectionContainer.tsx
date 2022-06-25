/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './SectionContainer.module.scss';
import cn from 'classnames';

import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
const variants = {
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.2,
      duration: 0.3,
      staggerChildren: 0.5,
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
  other,
  isLoading,
  enableLine,
  index,
}: ISectionContainerProps) {
  const r = useRouter();
  let rightSector = null;
  if (isLoading) rightSector = <CircularProgress className={cn(s.loader)} size="small" />;
  else if (other) {
    rightSector = (
      <div
        className={cn(s.link, 'link-arrow')}
        onClick={() => {
          if (other.onClick) other.onClick();
          else if (other.href) r.push(other.href);
        }}
      >
        {other.title}
      </div>
    );
  }
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
        { [s.enableLine]: enableLine },

        className
      )}
    >
      <motion.div className={cn(s.line)} variants={variantHead}>
        <span />
      </motion.div>
      <motion.div className={cn(s.head)} variants={variantHead}>
        {title && <div className={cn(s.title)}>{title}</div>}
        {rightSector}
      </motion.div>
      {children}
    </motion.div>
  );
}

SectionContainer.defaultProps = {
  className: '',
  colorType: 1,
  enableLine: true,
  isLoading: false,
  disableHorizontalPadding: false,
};

interface ISectionContainerProps {
  className?: string;
  children: any;
  enableLine?: boolean;
  colorType?: 1 | 2 | 3;
  title?: any;
  index?: number;
  isLoading?: boolean;
  other?: {
    onClick?(): any;
    href?: string;
    title: any;
  };
}
