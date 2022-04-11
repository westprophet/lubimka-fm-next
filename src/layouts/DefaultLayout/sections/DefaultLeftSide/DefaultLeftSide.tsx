/**
 * Created by westp on 26.03.2022
 */

import React from 'react';
import s from './DefaultLeftSide.module.scss';
import cn from 'classnames';
import LanguageSelector from './components/LanguageSelector';
import AsideBar from '../../components/AsideBar';
import ToTopSection from './sections/ToTopSection';
import ToBackArrow from '../../components/AsideBar/components/ToPageArrow';

//Левое бар
export default function DefaultLeftSide({
  className,
  showArrow,
  backLink,
  onClickArrow,
}: IDefaultLeftSideProps) {
  return (
    <AsideBar.Wrapper position="left" fixed className={cn(s.DefaultLeftSide, className)}>
      <AsideBar.Top>
        <ToBackArrow
          className={cn(s.arrow)}
          show={showArrow}
          link={backLink}
          onClick={onClickArrow}
        />
      </AsideBar.Top>
      <AsideBar.Inner className={cn(s.inner)}>
        <LanguageSelector />
        <ToTopSection />
      </AsideBar.Inner>
    </AsideBar.Wrapper>
  );
}

DefaultLeftSide.defaultProps = {
  className: '',
  showArrow: false,
  onClickArrow: () => {},
};

interface IDefaultLeftSideProps {
  className?: string;
  showArrow: boolean;
  backLink?: string;
  onClickArrow?(): any;
}
