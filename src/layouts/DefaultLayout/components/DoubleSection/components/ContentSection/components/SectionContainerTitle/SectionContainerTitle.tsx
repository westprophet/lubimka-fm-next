/**
 * Created by westp on 28.04.2022
 */

import React, { forwardRef, LegacyRef } from 'react';
import s from './SectionContainerTitle.module.scss';
import cn from 'classnames';

const SectionContainerTitle = forwardRef(
  (
    { className, children }: ISectionContainerTitleProps,
    ref: LegacyRef<HTMLDivElement> | undefined
  ) => {
    return (
      <div ref={ref} className={cn(s.SectionContainerTitle, className)}>
        {children}
      </div>
    );
  }
);

SectionContainerTitle.defaultProps = {
  className: '',
};

interface ISectionContainerTitleProps {
  className?: string;
  children: any;
}

export default SectionContainerTitle;
