/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './DoubleSection.module.scss';
import cn from 'classnames';
import ScrollDownMouse from 'components/ScrollDownMouse';

export default function DoubleSection({
  className,
  color,
  children,
  resizable,
}: IDoubleSectionProps) {
  return (
    <section
      className={cn(s.DoubleSection, { [s.resizable]: resizable }, className)}
      style={{ background: color }}
    >
      <div className={cn(s.inner)}>{children}</div>
      <ScrollDownMouse />
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
  color?: string;

  resizable?: boolean;
  // cover?: string | null;
}
