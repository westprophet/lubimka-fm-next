/**
 * Created by westp on 18.02.2022
 */

import React from 'react';
import s from './HomePage.module.scss';
import cn from 'classnames';
import { IDefaultLayoutAttributes } from '../../layouts/DefaultLayout/DefaultLayout';
import { IAuthor, IClub, IEvent } from '../../interfaces';

import DefaultLayout from '../../layouts/DefaultLayout';
import {
  AppSection,
  BannerSection,
  ChannelsSection,
  ClubLifeSection,
  LubimkaDjsSection,
  PromoComeSection,
  PromoOrderMusicSection,
} from './sections';

export default function HomePage({ events, clubs, authors }: IHomePageProps) {
  return (
    <DefaultLayout className={cn(s.HomePage)}>
      <BannerSection />
      <AppSection />
      <LubimkaDjsSection authors={authors} />
      <PromoOrderMusicSection />
      <ClubLifeSection clubs={clubs} />
      <PromoComeSection />
      <ChannelsSection />
    </DefaultLayout>
  );
}
interface IHomePageProps extends IDefaultLayoutAttributes {
  events: IEvent[];
  clubs: IClub[];
  authors: IAuthor[];
}
