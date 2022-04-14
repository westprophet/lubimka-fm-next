/**
 * Created by westp on 18.02.2022
 */

import React, { createContext } from 'react';
import s from './scss/DefaultLayout.module.scss';
import cn from 'classnames';

import DefaultHeader from './components/DefaultHeader';
import useScrolling from './hooks/useScrolling';
import DefaultFooter from './components/DefaultFooter';

import DefaultLeftSide from './sections/DefaultLeftSide';
import DefaultRightSide from './sections/DefaultRightSide';
import PostFooter from './sections/PostFooter';
import BottomPlayer from './components/BottomPlayer';

import { IDefaultManagerValues } from './types';
import INITIAL_VALUES from './constants/INITIAL_VALUES';
import useProviderData from './hooks/useProviderData';

export const DefaultLayoutManagerContext = createContext<IDefaultManagerValues>(INITIAL_VALUES);

function DefaultLayout({ className, children, disablePlayer }: IDefaultLayoutProps) {
  const { position, direction } = useScrolling();
  const value = useProviderData(); //Получаем данные для провайдера
  const { player, header } = value;
  return (
    <main className={cn(s.DefaultLayout, className)}>
      <DefaultLayoutManagerContext.Provider value={value}>
        <DefaultHeader
          show={header.state.isShow || direction === 'Up' || header.state.isFixedShow}
          transparent={header.state.isTransparent || position === 'top'}
          fixed={true}
        />
        {children}
        <DefaultLeftSide showArrow={true} />
        {!disablePlayer && (
          <BottomPlayer
            show={player.state.isShow}
            transparent={player.state.isTransparent || position === 'top'}
            pinned={player.state.isPinned}
            setPinned={player.pin}
            isOpenChannelMenu={player.state.isOpenChannelMenu}
            setIsOpenChannelMenu={player.openChannelMenu}
          />
        )}
        <DefaultRightSide showPlayer={!player.state.isPinned} />
        <DefaultFooter />
        <PostFooter />
      </DefaultLayoutManagerContext.Provider>
    </main>
  );
}

DefaultLayout.defaultProps = {
  className: '',
  disablePlayer: false,
};

export interface IDefaultLayoutAttributes {
  disablePlayer?: boolean;
}

interface IDefaultLayoutProps extends IDefaultLayoutAttributes {
  className?: string;
  children: any;
}

export default DefaultLayout;
