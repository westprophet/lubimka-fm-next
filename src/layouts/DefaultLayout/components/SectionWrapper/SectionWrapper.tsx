/**
 * Created by westp on 31.03.2022
 */

import React from 'react';
import s from './SectionWrapper.module.scss';
import cn from 'classnames';

export default function SectionWrapper({ className, children, id }: ISectionWrapperProps) {
  return (
    <section className={cn(s.SectionWrapper, className)} id={id}>
      {children}
    </section>
  );
}

SectionWrapper.defaultProps = {
  className: '',
};

interface ISectionWrapperProps {
  className?: string;
  children?: any;
  id?: string;
}
