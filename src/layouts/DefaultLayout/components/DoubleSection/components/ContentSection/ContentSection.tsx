/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './ContentSection.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';
import useBreakpoint from 'hooks/useBreakpoint';

const variants = {
  show: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  hidden: (direction: boolean) => ({
    x: direction ? '100%' : 0,
    y: !direction ? '100%' : 0,
  }),
};
export default function ContentSection({
  className,
  children,
  resizable,
  disableAnimation,
}: IContentSectionProps) {
  const b = useBreakpoint();
  return (
    <motion.section
      variants={variants}
      animate="show"
      initial={disableAnimation ? 'show' : 'hidden'}
      custom={b.lg}
      className={cn(s.ContentSectionContainer, { [s.resizable]: resizable }, className)}
    >
      <div className={cn(s.ContentSection)}>
        <div className={cn(s.inner)}> {children}</div>
      </div>
    </motion.section>
  );
}

ContentSection.defaultProps = {
  className: '',
};

interface IContentSectionProps {
  className?: string;
  children: any;
  resizable?: boolean;
  disableAnimation?: boolean;
}
