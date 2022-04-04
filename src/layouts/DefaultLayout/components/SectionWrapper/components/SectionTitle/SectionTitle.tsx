/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './SectionTitle.module.scss';
import cn from 'classnames';

export default function SectionTitle({ className, children }: ISectionTitleProps) {
  return <h2 className={cn(s.SectionTitle, className)}>{children}</h2>;
}

SectionTitle.defaultProps = {
  className: '',
};

interface ISectionTitleProps {
  className?: string;
  children: any;
}
