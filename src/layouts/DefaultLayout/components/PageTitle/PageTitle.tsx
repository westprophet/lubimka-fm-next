/**
 * Created by westp on 23.04.2022
 */

import React, { useCallback } from 'react';
import s from './PageTitle.module.scss';
import cn from 'classnames';
import ArrowButton from 'components/UI/buttons/ArrowButton';
import TextPlaceholder from 'components/UI/TextPlaceholder';
import { useRouter } from 'next/router';

export default function PageTitle({ className, children, onClick, placeholder }: IPageTitleProps) {
  const r = useRouter();

  const onClickHandler = onClick ? onClick : r.back;

  if (!placeholder)
    return (
      <div className={cn(s.PageTitle, className)}>
        <ArrowButton side="left" size="small" />
        <h1>{children}</h1>
      </div>
    );
  else {
    return (
      <TextPlaceholder
        className={cn(s.PageTitle, className)}
        placeholder={placeholder}
        side="left"
        onClick={onClickHandler}
      >
        <h1>{children}</h1>
      </TextPlaceholder>
    );
  }
}

PageTitle.defaultProps = {
  className: '',
  // goToPrev: true,
};

interface IPageTitleProps {
  className?: string;
  children: any;
  onClick?(): any;
  placeholder?: string;
}
