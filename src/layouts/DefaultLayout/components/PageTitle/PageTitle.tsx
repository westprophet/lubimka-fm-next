/**
 * Created by westp on 23.04.2022
 */

import React, { useEffect } from 'react';
import s from './PageTitle.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { Breadcrumbs, Link } from '@mui/material';

import NextLink from 'next/link';

//Выполняет функцию заголовка и текста по котором можно возвратится обратно нв предыдущую страницу
//или на определенную страницу если нет истории
export default function PageTitle({
  className,
  breadcrumbs,
  title,
  backURL,
  withPadding,
  leftMargin,
}: IPageTitleProps) {
  const r = useRouter();
  useEffect(() => {
    if (backURL) r.prefetch(backURL);
  }, [backURL, r]);

  return (
    <div className={cn(s.PageTitle, { [s.wP]: withPadding, [s.lM]: leftMargin }, className)}>
      {title ? <h1>{title}</h1> : null}
      {breadcrumbs ? (
        <Breadcrumbs aria-label="breadcrumb" className={cn(s.breadcrumbs)}>
          <Link underline="hover" color="inherit">
            <NextLink href={'/'}>Главная</NextLink>
          </Link>
          {breadcrumbs?.map((i: IBreadCrumbsItem) => {
            if (i.link)
              return (
                <Link key={i.link} underline="hover" color="inherit">
                  <NextLink href={i.link}>{i.title}</NextLink>
                </Link>
              );
            else
              return (
                <Link key={i.title} underline="none" color="inherit">
                  {i.title}
                </Link>
              );
          })}
        </Breadcrumbs>
      ) : null}
    </div>
  );
}

PageTitle.defaultProps = {
  className: '',
  withPadding: true,
  leftMargin: true,
};

export interface IBreadCrumbsItem {
  title: string;
  link?: string;
}

interface IPageTitleProps {
  className?: string;
  // onClick?(): any;
  title?: any;
  backURL?: string;
  breadcrumbs?: IBreadCrumbsItem[];
  withPadding?: boolean;
  leftMargin?: boolean;
}
