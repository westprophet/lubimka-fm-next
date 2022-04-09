/**
 * Created by westp on 18.02.2022
 */

import React from 'react';
import s from './scss/DefaultLayout.module.scss';
import cn from 'classnames';

import DefaultHeader from './components/DefaultHeader';
import useScrolling from './hooks/useScrolling';
import DefaultFooter from './components/DefaultFooter';

import DefaultLeftSide from './sections/DefaultLeftSide';
import DefaultRightSide from './sections/DefaultRightSide';
import PostFooter from './sections/PostFooter';
import CommonPlayerManager from './contexts/CommonPlayerManager';

export default function DefaultLayout({ className, children, disablePlayer }: IDefaultLayoutProps) {
  const { position, direction } = useScrolling();
  return (
    <main className={cn(s.DefaultLayout, className)}>
      <DefaultHeader
        show={direction === 'Up'}
        transparent={position === 'top'}
        fixed={position !== 'top'}
      />
      <DefaultLeftSide />
      <CommonPlayerManager show={true} transparent={position === 'top'}>
        {children}
      </CommonPlayerManager>
      <DefaultRightSide />
      <DefaultFooter />
      <PostFooter />
    </main>
  );
}

DefaultLayout.defaultProps = {
  className: '',
  disablePlayer: false,
};

interface IDefaultLayoutProps {
  className?: string;
  children: any;
  disablePlayer?: boolean;
}
