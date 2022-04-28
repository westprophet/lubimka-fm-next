/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './ContentSection.module.scss';
import cn from 'classnames';

export default function ContentSection({ className, children }: IContentSectionProps) {
  return (
    <section className={cn(s.ContentSection, className)}>
      <div className={cn(s.inner)}> {children}</div>
    </section>
  );
}

ContentSection.defaultProps = {
  className: '',
};

interface IContentSectionProps {
  className?: string;
  children: any;
}
