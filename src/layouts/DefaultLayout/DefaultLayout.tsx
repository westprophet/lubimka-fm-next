/**
 * Created by westp on 18.02.2022
 */

import React from 'react';
import s from './DefaultLayout.module.scss';
import cn from 'classnames';
import CommonPlayer from 'components/CommonPlayer';
import DefaultHeader from './components/DefaultHeader';
import DefaultLeftSide from './sections/DefaultLeftSide';
import DefaultRightSide from './sections/DefaultRightSide';

export default function DefaultLayout({ className, children }: IDefaultLayoutProps) {
  return (
    <main className={cn(s.DefaultLayout, className)}>
      <DefaultHeader />
      <DefaultLeftSide />
      {children}
      <DefaultRightSide />
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
