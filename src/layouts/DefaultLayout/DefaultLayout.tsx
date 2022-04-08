/**
 * Created by westp on 18.02.2022
 */

import React from 'react';
import s from './scss/DefaultLayout.module.scss';
import cn from 'classnames';

import DefaultHeader from './components/DefaultHeader';
import DefaultLeftSide from './sections/DefaultLeftSide';
import DefaultRightSide from './sections/DefaultRightSide';
import CommonPlayer from './components/CommonPlayer';
import useScrolling from './hooks/useScrolling';

export default function DefaultLayout({ className, children }: IDefaultLayoutProps) {
  const { position, direction } = useScrolling();
  return (
    <main className={cn(s.DefaultLayout, className)}>
      <DefaultHeader
        show={direction === 'Up'}
        transparent={position === 'top'}
        fixed={position !== 'top'}
      />
      <DefaultLeftSide />
      {children}
      <DefaultRightSide />
      <CommonPlayer fixed={true} show={true} transparent={position === 'top'} />
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
