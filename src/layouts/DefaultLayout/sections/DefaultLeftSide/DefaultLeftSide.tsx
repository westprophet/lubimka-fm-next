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
import { useRouter } from 'next/router';

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 1,
    },
  },
  hidden: {
    x: '-100%',
  },
};

//Левое бар
export default function DefaultLeftSide({ className, arrow }: IDefaultLeftSideProps) {
  const r = useRouter();
  return (
    <AsideBar.MWrapper
      variants={variants}
      initial="hidden"
      animate="visible"
      position="left"
      fixed
      className={cn(s.DefaultLeftSide, className)}
    >
      <AsideBar.Top>
        <ToBackArrow
          show={arrow?.show ?? false}
          link={arrow?.link}
          onClick={arrow?.onClick ?? arrow?.thisGoToPrevPage ? r.back : () => {}}
        />
      </AsideBar.Top>
      <AsideBar.Inner className="inner">
        <LanguageSelector />
        <ToTopSection />
      </AsideBar.Inner>
    </AsideBar.MWrapper>
  );
}

DefaultLeftSide.defaultProps = {
  className: '',
};

interface IDefaultLeftSideProps {
  className?: string;
  arrow?: {
    show?: boolean;
    link?: string;
    thisGoToPrevPage?: boolean;
    onClick?(): any;
  };
}
