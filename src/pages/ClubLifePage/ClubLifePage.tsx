/**
 * Created by westp on 25.05.2022
 */

import React from 'react';
import s from './ClubLifePage.module.scss';
import cn from 'classnames';
import DefaultLayout from '../../layouts/DefaultLayout';
import ClubsSection from './sections/ClubsSection';
import { IClub } from '../../interfaces';

export default function ClubLifePage({ clubs }: IClubLifePageProps) {
  return (
    <DefaultLayout.Layout className={cn(s.ClubLifePage)}>
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/" placeholder="На главную">
          Club Life
        </DefaultLayout.PageTitle>
        <ClubsSection clubs={clubs} />
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

interface IClubLifePageProps {
  clubs: IClub[];
}
