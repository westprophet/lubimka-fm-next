/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './QuadContentSection.module.scss';
import cn from 'classnames';
// import { motion } from 'framer-motion';

// const variants = {
//   show: (i: number) => ({
//     x: 0,
//     transition: {
//       duration: 0.5,
//     },
//   }),
//   hidden: {
//     x: '100%',
//     transition: {
//       duration: 0.2,
//     },
//   },
// };

export default function QuadContentSection({ className, children, show }: IContentSectionProps) {
  return (
    <section
      className={cn(s.QCC, className)}
      // variants={variants}
      // animate={show ? 'show' : 'hidden'}
      // initial="show"
    >
      <div className={cn(s.QC)}>
        <div className={cn(s.inner)}> {children}</div>
      </div>
    </section>
  );
}

QuadContentSection.defaultProps = {
  className: '',
  show: true,
};

interface IContentSectionProps {
  className?: string;
  show?: boolean;
  children: any;
}
