/**
 * Created by westp on 18.02.2022
 */

import React from 'react';
import s from './DefaultLayout.module.scss';
import cn from 'classnames';
import CommonPlayer from 'components/CommonPlayer';

export default function DefaultLayout({ className, children }: IDefaultLayoutProps) {
  return (
    <main className={cn(s.DefaultLayout, className)}>
      {children}
      <CommonPlayer />
    </main>
  );
}

DefaultLayout.defaultProps = {
  className: '',
};

interface IDefaultLayoutProps {
  className?: string;
  children: any;
}
