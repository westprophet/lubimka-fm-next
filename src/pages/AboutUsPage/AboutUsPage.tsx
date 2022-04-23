/**
 * Created by westp on 23.04.2022
 */

import React from 'react';
import s from './AboutUsPage.module.scss';
import cn from 'classnames';
import DefaultLayout, { IDefaultLayoutAttributes } from '../../layouts/DefaultLayout';
import { MainSection } from './sections';
import { ITeamMember } from '../../interfaces';
import TeamSection from './sections/TeamSection';

export default function AboutUsPage({ className, team }: IAboutUsPageProps) {
  return (
    <DefaultLayout.Layout
      className={cn(s.AboutUsPage, className)}
      player={{
        transparent: false,
      }}
    >
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle placeholder="Назад">О нас</DefaultLayout.PageTitle>
        <MainSection />
        <TeamSection team={team} />
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

AboutUsPage.defaultProps = {
  className: '',
};

interface IAboutUsPageProps extends IDefaultLayoutAttributes {
  className?: string;
  team: ITeamMember[];
}
