/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './SectionTitle.module.scss';
import cn from 'classnames';
import TextPlaceholder from 'components/UI/TextPlaceholder';

export default function SectionTitle({ className, children, placeholder }: ISectionTitleProps) {
  if (!placeholder) return <h2 className={cn(s.SectionTitle, className)}>{children}</h2>;
  return (
    <TextPlaceholder
      className={cn(s.SectionTitle, className)}
      placeholder={placeholder}
      // arrow
      side="left"
    >
      {children}
    </TextPlaceholder>
  );
}

SectionTitle.defaultProps = {
  className: '',
  // placeholder: 'Подробнее',
};

interface ISectionTitleProps {
  className?: string;
  children: any;
  placeholder?: any;
}
