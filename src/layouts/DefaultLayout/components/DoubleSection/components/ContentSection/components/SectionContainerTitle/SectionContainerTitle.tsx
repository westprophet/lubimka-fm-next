/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './SectionContainerTitle.module.scss';
import cn from 'classnames';

export default function SectionContainerTitle({
  className,
  children,
}: ISectionContainerTitleProps) {
  return <div className={cn(s.SectionContainerTitle, className)}>{children}</div>;
}

SectionContainerTitle.defaultProps = {
  className: '',
};

interface ISectionContainerTitleProps {
  className?: string;
  children: any;
}
