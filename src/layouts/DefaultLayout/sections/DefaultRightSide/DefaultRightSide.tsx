/**
 * Created by westp on 28.03.2022
 */

import React from 'react';
import s from './DefaultRightSide.module.scss';
import cn from 'classnames';
import AsideBar from '../../components/AsideBar';
import SocialsSection from './sections/SocialsSection';
import AsideMiniPlayer from '../../components/AsideBar/components/AsideMiniPlayer';
export const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 1,
    },
  },
  hidden: {
    x: '100%',
  },
};

export default function DefaultRightSide({ className, showPlayer }: IDefaultRightSideProps) {
  return (
    <AsideBar.MWrapper
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(s.DefaultRightSide, className)}
      position="right"
    >
      <AsideBar.Top>
        <AsideMiniPlayer show={showPlayer} />
      </AsideBar.Top>
      <AsideBar.Inner>
        <SocialsSection />
      </AsideBar.Inner>
    </AsideBar.MWrapper>
  );
}

DefaultRightSide.defaultProps = {
  className: '',
  showPlayer: false,
};

interface IDefaultRightSideProps {
  className?: string;
  showPlayer?: boolean;
}
