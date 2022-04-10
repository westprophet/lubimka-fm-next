/**
 * Created by westp on 18.02.2022
 */

import React, { useState } from 'react';
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
  const [pinned, setPinned] = useState(true);
  return (
    <main className={cn(s.DefaultLayout, className)}>
      <CommonPlayerManager
        show={true}
        transparent={position === 'top'}
        disabled={disablePlayer}
        onPinned={setPinned}
      >
        <DefaultHeader
          show={direction === 'Up'}
          transparent={position === 'top'}
          fixed={position !== 'top'}
        />
        {children}
        <DefaultLeftSide showPlayer={!pinned} />
        <DefaultRightSide />
        <DefaultFooter />
        <PostFooter />
      </CommonPlayerManager>
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
