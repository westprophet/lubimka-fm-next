/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './ContentSection.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

const variants = {
  show: {
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
  hidden: {
    x: '100%',
  },
};
export default function ContentSection({ className, children, resizable }: IContentSectionProps) {
  return (
    <motion.section
      variants={variants}
      animate="show"
      initial="hidden"
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
}
