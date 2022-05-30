/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './QuadContentSection.module.scss';
import cn from 'classnames';

export default function QuadContentSection({ className, children }: IContentSectionProps) {
  return (
    <section className={cn(s.QCC, className)}>
      <div className={cn(s.QC)}>
        <div className={cn(s.inner)}> {children}</div>
      </div>
    </section>
  );
}

QuadContentSection.defaultProps = {
  className: '',
};

interface IContentSectionProps {
  className?: string;
  children: any;
}
