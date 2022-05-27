/**
 * Created by westp on 25.05.2022
 */

import React from 'react';
import s from './ClubPage.module.scss';
import cn from 'classnames';
import { IClub, IEvent } from '../../interfaces';
import DSection from '../../layouts/DefaultLayout/components/DoubleSection';
import DefaultLayout from 'src/layouts/DefaultLayout';
import { getImageUrl } from '../../tools/IWrappedStrapiImage';
import ReactMarkdown from 'react-markdown';
import EventsSlider from './components/EventsSlider';

export default function ClubPage({ club, nearbyEvents, recomendedEvents }: IClubPageProps) {
  const cover = getImageUrl(club.attributes.cover);

  return (
    <DefaultLayout.Layout
      className={cn(s.ClubPage)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DSection.Wrapper>
        <DSection.Preview.Wrapper cover={cover} className={cn(s.previewContainer)}>
          <DefaultLayout.PageTitle placeholder={'На главную'}>Назад</DefaultLayout.PageTitle>
          <DSection.Preview.Inner>
            <h1 className={cn(s.title)}>{club.attributes.title}</h1>
          </DSection.Preview.Inner>
        </DSection.Preview.Wrapper>
        <DSection.Content.Wrapper className={cn(s.tabs)}>
          <DSection.Content.Container colorType={1} className={cn(s.description)} title="Описание">
            <ReactMarkdown>{club.attributes.description}</ReactMarkdown>
          </DSection.Content.Container>
          {recomendedEvents && (
            <DSection.Content.Container title="Рекомендуем посетить" colorType={2}>
              <EventsSlider events={recomendedEvents} />
            </DSection.Content.Container>
          )}
          {nearbyEvents && (
            <DSection.Content.Container title="Ближайшие" colorType={3}>
              <EventsSlider events={nearbyEvents} />
            </DSection.Content.Container>
          )}
        </DSection.Content.Wrapper>
      </DSection.Wrapper>
    </DefaultLayout.Layout>
  );
}

interface IClubPageProps {
  club: IClub;
  nearbyEvents: IEvent[] | null;
  recomendedEvents: IEvent[] | null;
}
