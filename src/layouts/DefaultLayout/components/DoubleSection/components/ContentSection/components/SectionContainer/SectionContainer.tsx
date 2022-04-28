/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './SectionContainer.module.scss';
import cn from 'classnames';
import SectionContainerTitle from '../SectionContainerTitle';

export default function SectionContainer({
  className,
  children,
  colorType,
  title,
}: ISectionContainerProps) {
  return (
    <div
      className={cn(
        s.SectionContainer,
        {
          [s.colorType1]: colorType === 1,
          [s.colorType2]: colorType === 2,
          [s.colorType3]: colorType === 3,
        },
        className
      )}
    >
      <div className={cn(s.line)}>
        <span></span>
      </div>
      {title && <SectionContainerTitle>{title}</SectionContainerTitle>}
      {children}
    </div>
  );
}

SectionContainer.defaultProps = {
  className: '',
  colorType: 1,
};

interface ISectionContainerProps {
  className?: string;
  children: any;
  colorType?: 1 | 2 | 3;
  title?: any;
}
