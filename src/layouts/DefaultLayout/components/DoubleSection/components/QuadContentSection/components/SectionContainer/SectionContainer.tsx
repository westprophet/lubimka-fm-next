/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './SectionContainer.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';

export default function SectionContainer({
  className,
  children,
  colorType,
  title,
  other,
  isLoading,
  enableLine,
}: ISectionContainerProps) {
  const r = useRouter();
  let rightSector = null;
  if (isLoading) rightSector = <CircularProgress className={cn(s.loader)} size="small" />;
  else if (other) {
    rightSector = (
      <div
        className={cn(s.link, 'link-arrow')}
        onClick={() => {
          if (other.onClick) other.onClick();
          else if (other.href) r.push(other.href);
        }}
      >
        {other.title}
      </div>
    );
  }
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
      <div className={cn(s.head)}>
        {title && <div className={cn(s.title)}>{title}</div>}
        {rightSector}
      </div>
      {children}
    </div>
  );
}

SectionContainer.defaultProps = {
  className: '',
  colorType: 1,
  enableLine: true,
  isLoading: false,
  disableHorizontalPadding: false,
};

interface ISectionContainerProps {
  className?: string;
  children: any;
  enableLine?: boolean;
  colorType?: 1 | 2 | 3;
  title?: any;
  isLoading?: boolean;
  other?: {
    onClick?(): any;
    href?: string;
    title: any;
  };
}
