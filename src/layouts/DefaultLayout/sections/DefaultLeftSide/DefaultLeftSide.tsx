/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './DefaultLeftSide.module.scss';
import cn from 'classnames';
import LanguageSelector from './components/LanguageSelector';
import AsideBar from '../../components/AsideBar';
import ToTopSection from './sections/ToTopSection';

export default function DefaultLeftSide({ className }: IDefaultLeftSideProps) {
  return (
    <AsideBar position="left" fixed className={cn(s.DefaultLeftSide, className)}>
      <LanguageSelector />
      <ToTopSection />
    </AsideBar>
  );
}

DefaultLeftSide.defaultProps = {
  className: '',
};

interface IDefaultLeftSideProps {
  className?: string;
}
