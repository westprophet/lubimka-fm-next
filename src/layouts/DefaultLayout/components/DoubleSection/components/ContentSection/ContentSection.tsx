/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './ContentSection.module.scss';
import cn from 'classnames';

export default function ContentSection({ className, children, resizable }: IContentSectionProps) {
  return (
    <section className={cn(s.ContentSectionContainer, { [s.resizable]: resizable }, className)}>
      <div className={cn(s.ContentSection)}>
        <div className={cn(s.inner)}> {children}</div>
      </div>
    </section>
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
