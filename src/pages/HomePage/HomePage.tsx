/**
 * Created by westp on 18.02.2022
 */

import React from 'react';
import s from './HomePage.module.scss';
import cn from 'classnames';
import DefaultLayout, { IDefaultLayoutAttributes } from '../../layouts/DefaultLayout';
import { IAuthor, IChannel, IClub, IEvent, IPartner } from '../../interfaces';

import {
  AppSection,
  BannerSection,
  ChannelsSection,
  ClubLifeSection,
  LubimkaDjsSection,
  PromoComeSection,
  PromoDownloadSection,
  PromoOrderMusicSection,
  PartnersSection,
} from './sections';

export default function HomePage({ events, clubs, authors, partners, channels }: IHomePageProps) {
  return (
    <DefaultLayout.Layout
      className={cn(s.HomePage)}
      left={{
        arrow: {
          show: false,
        },
      }}
    >
      <BannerSection />
      <AppSection />
      <LubimkaDjsSection authors={authors} />
      <PromoOrderMusicSection />
      <ClubLifeSection clubs={clubs} events={events} />
      <PromoComeSection />
      <ChannelsSection channels={channels} />
      <PromoDownloadSection />
      <PartnersSection partners={partners} />
    </DefaultLayout.Layout>
  );
}
interface IHomePageProps extends IDefaultLayoutAttributes {
  events: IEvent[];
  clubs: IClub[];
  authors: IAuthor[];
  partners: IPartner[];
  channels?: IChannel[];
}
