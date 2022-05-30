/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './SectionContainer.module.scss';
import cn from 'classnames';

export default function SectionContainer({
  className,
  children,
  colorType,
  title,
  enableLine,
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
        { [s.enableLine]: enableLine },
        className
      )}
    >
      <div className={cn(s.line)}>
        <span></span>
      </div>
      {title && <div className={cn(s.title)}>{title}</div>}
      {children}
    </div>
  );
}

SectionContainer.defaultProps = {
  className: '',
  colorType: 1,
  enableLine: true,
};

interface ISectionContainerProps {
  className?: string;
  children: any;
  enableLine?: boolean;
  colorType?: 1 | 2 | 3;
  title?: any;
}
