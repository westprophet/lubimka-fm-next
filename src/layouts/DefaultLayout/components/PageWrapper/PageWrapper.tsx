/**
 * Created by westp on 23.04.2022
 */

import React from 'react';
import s from './PageWrapper.module.scss';
import cn from 'classnames';

//Обертка страницы делает отступы от верха и низа страницы
//Не всегда применяется

export default function PageWrapper({ className, children }: IPageWrapperProps) {
  return <div className={cn(s.PageWrapper, className)}>{children}</div>;
}

PageWrapper.defaultProps = {
  className: '',
};

interface IPageWrapperProps {
  children: any;
  className?: string;
}
