/**
 * Created by westp on 28.03.2022
 */

import React from 'react';
import s from './DefaultRightSide.module.scss';
import cn from 'classnames';
import AsideBar from '../../components/AsideBar';
import SocialsSection from './sections/SocialsSection';

export default function DefaultRightSide({ className }: IDefaultRightSideProps) {
  return (
    <AsideBar className={cn(s.DefaultRightSide, className)} position="right">
      <SocialsSection />
    </AsideBar>
  );
}

DefaultRightSide.defaultProps = {
  className: '',
};

interface IDefaultRightSideProps {
  className?: string;
}
