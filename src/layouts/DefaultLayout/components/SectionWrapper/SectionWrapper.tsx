/**
 * Created by westp on 31.03.2022
 */

import React, { forwardRef, LegacyRef } from 'react';
import s from './SectionWrapper.module.scss';
import cn from 'classnames';

const SectionWrapper = forwardRef(
  ({ className, children, id }: ISectionWrapperProps, ref: LegacyRef<HTMLElement> | undefined) => {
    return (
      <section ref={ref} className={cn(s.SectionWrapper, className)} id={id}>
        {children}
      </section>
    );
  }
);

SectionWrapper.defaultProps = {
  className: '',
};

interface ISectionWrapperProps {
  className?: string;
  children?: any;
  id?: string;
}
export default SectionWrapper;
