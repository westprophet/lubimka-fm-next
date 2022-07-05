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

import { NextSeo } from 'next-seo';

function DefaultLayout({
  className,
  children,
  left: leftSideSetting,
  player: playerSettings,
  header: headerSettings,
  right: rightSideSettings,
}: IDefaultLayoutProps) {
  const { position, direction } = useScrolling();

  const value = useProviderData({
    header: headerSettings,
    player: playerSettings,
    right: rightSideSettings,
  }); //Получаем данные для провайдера

  const { player, header, right } = value;
  return (
    <main className={cn(s.DefaultLayout, className)}>
      <DefaultLayoutManagerContext.Provider value={value}>
        <DefaultHeader
          show={header.state?.isShow || direction === 'Up' || header.state?.isFixedShow}
          transparent={header.state?.isTransparent || position === 'top'}
          fixed={header.state?.isFix}
        />
        {children}
        <DefaultLeftSide arrow={leftSideSetting?.arrow} />
        {!player.state?.isDisable && (
          <BottomPlayer
            show={player.state?.isShow}
            transparent={player.state?.isTransparent}
            pinned={player.state?.isPinned}
            setPinned={player.pin}
            isOpenChannelMenu={player.state?.isOpenChannelMenu}
            setIsOpenChannelMenu={player.openChannelMenu}
          />
        )}
        <DefaultRightSide showPlayer={right.state?.isShowPlayer || player.state?.isDisable} />
        <DefaultFooter />
        <PostFooter />
      </DefaultLayoutManagerContext.Provider>
    </main>
  );
}

DefaultLayout.defaultProps = {
  className: '',
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

export default React.memo(DefaultLayout);
