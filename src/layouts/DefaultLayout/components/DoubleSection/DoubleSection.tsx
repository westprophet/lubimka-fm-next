/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './DoubleSection.module.scss';
import cn from 'classnames';

export default function DoubleSection({ className, children, resizable }: IDoubleSectionProps) {
  return (
    <section className={cn(s.DoubleSection, { [s.resizable]: resizable }, className)}>
      <div className={cn(s.inner)}>{children}</div>
    </section>
  );
}

DoubleSection.defaultProps = {
  className: '',
  resizable: false,
};

interface IDoubleSectionProps {
  className?: string;
  children: any;
  resizable?: boolean;
  // cover?: string | null;
}
