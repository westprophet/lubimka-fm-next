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

export default function AboutUsPage({ team }: IAboutUsPageProps) {
  return (
    <DefaultLayout.Layout
      className={cn(s.AboutUsPage)}
      player={{
        isTransparent: false,
      }}
    >
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle
          title="О нас"
          breadcrumbs={[
            {
              title: 'О нас',
            },
          ]}
        />
        <MainSection />
        <TeamSection team={team} />
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

interface IAboutUsPageProps extends IDefaultLayoutAttributes {
  team: ITeamMember[];
}
