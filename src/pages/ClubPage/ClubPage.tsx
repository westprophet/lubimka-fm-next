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
import Image from 'next/image';
import DATA_FOR_BLUR from '../../constants/DATA_FOR_BLUR';
import { motion } from 'framer-motion';

const variantsImage = {
  show: (i: number) => ({
    opacity: 1,
    // y: 0,
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  }),
  hidden: {
    // y: '70%',
    opacity: 0,
  },
};

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
          <DefaultLayout.PageTitle
            // title="Блог"
            leftMargin={false}
            breadcrumbs={[
              {
                title: 'Club Life',
                link: '/club-life',
              },
              {
                title: 'Клубы',
                link: '/club-life/clubs',
              },
              {
                title: club.attributes.title,
                // link: '/club-life/clubs',
              },
            ]}
          />
          <DSection.Preview.Inner className={cn(s.titleContainer)}>
            {cover ? (
              <motion.div
                className={cn(s.cover)}
                variants={variantsImage}
                animate="show"
                initial="hidden"
              >
                <Image
                  src={cover}
                  layout="fill"
                  objectFit="cover"
                  blurDataURL={DATA_FOR_BLUR}
                  placeholder="blur"
                />
              </motion.div>
            ) : null}
            <h1 className={cn(s.title)}>{club.attributes.title}</h1>
          </DSection.Preview.Inner>
        </DSection.Preview.Wrapper>
        <DSection.Content.Wrapper className={cn(s.tabs)}>
          <DSection.Content.Container
            colorType={1}
            className={cn(s.description)}
            title="Описание"
            index={1}
          >
            <ReactMarkdown>{club.attributes.description}</ReactMarkdown>
          </DSection.Content.Container>
          {recomendedEvents && (
            <DSection.Content.Container title="Рекомендуем посетить" colorType={2} index={2}>
              <EventsSlider events={recomendedEvents} />
            </DSection.Content.Container>
          )}
          {nearbyEvents && (
            <DSection.Content.Container title="Ближайшие" colorType={3} index={3}>
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
