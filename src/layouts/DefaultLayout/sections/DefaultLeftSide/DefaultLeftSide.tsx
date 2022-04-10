/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './DefaultLeftSide.module.scss';
import cn from 'classnames';
import LanguageSelector from './components/LanguageSelector';
import AsideBar from '../../components/AsideBar';
import ToTopSection from './sections/ToTopSection';
import AsideMiniPlayer from './sections/AsideMiniPlayer';

//Левое бар
export default function DefaultLeftSide({ className, showPlayer }: IDefaultLeftSideProps) {
  return (
    <AsideBar position="left" fixed className={cn(s.DefaultLeftSide, className)}>
      <AsideMiniPlayer className={cn(s.player, { [s.show]: showPlayer })} />
      <LanguageSelector />
      <ToTopSection />
    </AsideBar>
  );
}

DefaultLeftSide.defaultProps = {
  className: '',
  showPlayer: false,
};

interface IDefaultLeftSideProps {
  className?: string;
  showPlayer?: boolean;
}
