/**
 * Created by westp on 04.04.2022
 */

import React, { forwardRef, LegacyRef, useCallback } from 'react';
import s from './SectionTitle.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';
import TextPlaceholder from 'components/UI/TextPlaceholder';

// eslint-disable-next-line react/display-name
const SectionTitle = forwardRef(
  (
    { className, children, placeholder, side, link }: ISectionTitleProps,
    ref: LegacyRef<HTMLHeadingElement> | undefined
  ) => {
    const r = useRouter();
    const onClickHandler = useCallback(() => {
      if (link) r.push(link);
    }, [link]);

    if (!placeholder || !link)
      return (
        <h2 ref={ref} className={cn(s.SectionTitle, className)}>
          {children}
        </h2>
      );
    return (
      <div ref={ref}>
        <TextPlaceholder
          className={cn(s.SectionTitle, className)}
          placeholder={placeholder}
          arrow
          side={side}
          onClick={onClickHandler}
        >
          {children}
        </TextPlaceholder>
      </div>
    );
  }
);

export default SectionTitle;

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
