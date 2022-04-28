/**
 * Created by westp on 04.04.2022
 */

import React, { useCallback } from 'react';
import s from './SectionTitle.module.scss';
import cn from 'classnames';
import TextPlaceholder from 'components/UI/TextPlaceholder';
import { useRouter } from 'next/router';

export default function SectionTitle({
  className,
  children,
  placeholder,
  side,
  link,
}: ISectionTitleProps) {
  const r = useRouter();
  const onClickHandler = useCallback(() => {
    if (link) r.push(link);
  }, [link]);

  if (!placeholder || !link) return <h2 className={cn(s.SectionTitle, className)}>{children}</h2>;
  return (
    <TextPlaceholder
      className={cn(s.SectionTitle, className)}
      placeholder={placeholder}
      arrow
      side={side}
      onClick={onClickHandler}
    >
      {children}
    </TextPlaceholder>
  );
}

SectionTitle.defaultProps = {
  className: '',
  side: 'right',
  placeholder: 'Подробнее',
};

interface ISectionTitleProps {
  className?: string;
  children: any;
  placeholder?: string;
  link?: string;
  side?: 'left' | 'right';
}
