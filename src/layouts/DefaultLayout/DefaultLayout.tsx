/**
 * Created by westp on 18.02.2022
 */

import React, { createContext } from 'react';
import s from './scss/DefaultLayout.module.scss';
import cn from 'classnames';

import INITIAL_VALUES from './constants/INITIAL_VALUES';

import { DefaultHeader, DefaultFooter, BottomPlayer } from './components';
import { DefaultLeftSide, DefaultRightSide, PostFooter } from './sections';

import useScrolling from './hooks/useScrolling';
import useProviderData from './hooks/useProviderData';

import { IDefaultLayoutAttributes, IDefaultManagerValues } from './types';

export const DefaultLayoutManagerContext = createContext<IDefaultManagerValues>(INITIAL_VALUES);

function DefaultLayout({
  className,
  children,
  left: leftSideSetting,
  player: playerSettings,
  header: headerSettings,
}: IDefaultLayoutProps) {
  const { position, direction } = useScrolling();
  const value = useProviderData(); //Получаем данные для провайдера
  const { player, header } = value;
  return (
    <main className={cn(s.DefaultLayout, className)}>
      <DefaultLayoutManagerContext.Provider value={value}>
        <DefaultHeader
          show={
            headerSettings?.alwaysShow ||
            header.state?.isShow ||
            direction === 'Up' ||
            header.state?.isFixedShow
          }
          transparent={header.state?.isTransparent || position === 'top'}
          fixed={true}
        />
        {children}
        <DefaultLeftSide arrow={leftSideSetting?.arrow} />
        {!playerSettings?.disable && (
          <BottomPlayer
            show={player.state?.isShow}
            transparent={
              player.state?.isTransparent || (position === 'top' && playerSettings?.transparent)
            }
            pinned={player.state?.isPinned}
            setPinned={player.pin}
            isOpenChannelMenu={player.state?.isOpenChannelMenu}
            setIsOpenChannelMenu={player.openChannelMenu}
          />
        )}
        <DefaultRightSide showPlayer={!player.state?.isPinned} />
        <DefaultFooter />
        <PostFooter />
      </DefaultLayoutManagerContext.Provider>
    </main>
  );
}

DefaultLayout.defaultProps = {
  className: '',
  player: {
    disable: false,
  },
  header: {
    alwaysShow: false,
  },
  left: {
    arrow: {
      thisGoToPrevPage: true,
      show: true,
    },
  },
};

interface IDefaultLayoutProps extends IDefaultLayoutAttributes {
  className?: string;
  children: any;
}

export default DefaultLayout;
