/**
 * Created by westp on 23.04.2022
 */

import React, { useCallback, useEffect, useState } from 'react';
import s from './PageTitle.module.scss';
import cn from 'classnames';
import ArrowButton from 'components/UI/buttons/ArrowButton';
import TextPlaceholder from 'components/UI/TextPlaceholder';
import { useRouter } from 'next/router';

//Выполняет функцию заголовка и текста по котором можно возвратится обратно нв предыдущую страницу
//или на определенную страницу если нет истории
export default function PageTitle({
  className,
  children,
  onClick,
  placeholder,
  url,
}: IPageTitleProps) {
  const r = useRouter();

  useEffect(() => {
    if (url) r.prefetch(url);
  }, [url]);

  const onClickHandler = () => {
    if (onClick) onClick(); // Исполняем функциюю если такая указана
    else if (url) r.push(url);
    else r.back();
  };

  if (!placeholder)
    return (
      <div className={cn(s.PageTitle, className)} onClick={onClickHandler}>
        <ArrowButton side="left" size="small" />
        <h2>{children}</h2>
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
        <h2>{children}</h2>
      </TextPlaceholder>
    );
  }
}

PageTitle.defaultProps = {
  className: '',
  placeholder: 'Назад',
};

interface IPageTitleProps {
  className?: string;
  children: any;
  onClick?(): any;
  placeholder?: string | false;
  url?: string;
}
