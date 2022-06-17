/**
 * Created by westp on 17.06.2022
 */

import React from 'react';
import s from './RadioProgramsPage.module.scss';
import cn from 'classnames';
import { IRadioProgram } from 'interfaces/IRadioProgram';
import DefaultLayout from 'layouts/DefaultLayout';
import DSection from '../../layouts/DefaultLayout/components/DoubleSection';
import ChannelPlayer from '@pages/ChannelPage/components/ChannelPlayer';

export default function RadioProgramsPage({ className, programs }: IRadioProgramsPageProps) {
  return (
    <DefaultLayout.Layout
      className={cn(s.RadioProgramsPage, className)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/">Программы эфира</DefaultLayout.PageTitle>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

RadioProgramsPage.defaultProps = {
  className: '',
};

interface IRadioProgramsPageProps {
  className?: string;
  programs: IRadioProgram[];
}
