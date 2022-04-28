/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './DoubleSection.module.scss';
import cn from 'classnames';

export default function DoubleSection({ className, children }: IDoubleSectionProps) {
  return (
    <section className={cn(s.DoubleSection, className)}>
      <div className={cn(s.inner)}>{children}</div>
    </section>
  );
}

DoubleSection.defaultProps = {
  className: '',
};

interface IDoubleSectionProps {
  className?: string;
  children: any;
  // cover?: string | null;
}
