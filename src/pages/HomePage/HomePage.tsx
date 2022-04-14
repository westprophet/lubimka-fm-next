/**
 * Created by westp on 18.02.2022
 */

import React from 'react';
import s from './HomePage.module.scss';
import cn from 'classnames';

import DefaultLayout from '../../layouts/DefaultLayout';
import BannerSection from './sections/BannerSection';
import LubimkaDjsSection from './sections/LubimkaDjsSection';
import AppSection from './sections/AppSection';
import PromoOrderMusicSection from './sections/PromoOrderMusicSection';
import PromoComeSection from './sections/PromoComeSection';
import { IAuthor, IClub, IEvent } from 'src/interfaces';
import ClubLifeSection from './sections/ClubLifeSection/ClubLifeSection';
import { IDefaultLayoutAttributes } from '../../layouts/DefaultLayout/DefaultLayout';

export default function HomePage({ events, clubs, authors }: IHomePageProps) {
  return (
    <DefaultLayout className={cn(s.HomePage)}>
      <BannerSection />
      <AppSection />
      <LubimkaDjsSection authors={authors} />
      <PromoOrderMusicSection />
      <ClubLifeSection clubs={clubs} />
      <PromoComeSection />
    </DefaultLayout>
  );
}
interface IHomePageProps extends IDefaultLayoutAttributes {
  events: IEvent[];
  clubs: IClub[];
  authors: IAuthor[];
}
