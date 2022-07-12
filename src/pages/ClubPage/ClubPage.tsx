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
import IconString from 'components/UI/others/IconString';
import PlaceIcon from '@mui/icons-material/Place';
import isEmptyArray from 'utils/isEmptyArray';
import MiniMap from '@pages/ClubPage/sections/MiniMap';
import ClubMapMarker from 'components/ClubMapMarker';
import IPhone from '../../interfaces/others/IPhone';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import IEmail from '../../interfaces/others/IEmail';

const variantsImage = {
  show: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  }),
  hidden: {
    opacity: 0,
  },
};

export default function ClubPage({ club, nearbyEvents, recomendedEvents }: IClubPageProps) {
  const cover = getImageUrl(club.attributes.cover);
  const lat = club.attributes.coords.lat,
    lng = club.attributes.coords.lng;
  return (
    <DefaultLayout.Layout
      className={cn(s.ClubPage)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DSection.Wrapper>
        <DSection.Preview.Wrapper cover={cover} className={cn(s.previewContainer)}>
          <DefaultLayout.PageTitle
            leftMargin={false}
            breadcrumbs={[
              {
                title: 'Club Life',
                link: '/#club-life',
              },
              {
                title: 'Клубы',
                link: '/club-life/clubs',
              },
              {
                title: club.attributes.title,
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
        <DSection.Content.Wrapper className={cn(s.contentContainer)}>
          <DSection.Content.Container
            colorType={2}
            className={cn(s.address)}
            title="Адрес"
            index={1}
          >
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${club.attributes.address}`}
              target="_blank"
              rel="noreferrer"
            >
              <IconString icon={<PlaceIcon />} delay={100} className={cn(s.iconLine)}>
                {club.attributes.address}
              </IconString>
            </a>

            <MiniMap
              coords={{
                lat,
                lng,
              }}
            >
              <ClubMapMarker club={club} lat={lat} lng={lng} />
            </MiniMap>
          </DSection.Content.Container>

          {recomendedEvents && !isEmptyArray(recomendedEvents) && (
            <DSection.Content.Container title="Рекомендуем посетить" colorType={2} index={2}>
              <EventsSlider events={recomendedEvents} />
            </DSection.Content.Container>
          )}
          {nearbyEvents && !isEmptyArray(nearbyEvents) && (
            <DSection.Content.Container title="Ближайшие" colorType={3} index={3}>
              <EventsSlider events={nearbyEvents} />
            </DSection.Content.Container>
          )}
          {club.attributes.description && (
            <DSection.Content.Container
              colorType={2}
              className={cn(s.information)}
              title="Информация"
              index={1}
            >
              <div className={cn(s.phones)}>
                {club.attributes.PhoneNumbers && !isEmptyArray(club.attributes.PhoneNumbers)
                  ? club.attributes.PhoneNumbers.map((p: IPhone) => (
                      <a key={`phone-${p.phone}`} href={`tel:${p.phone}`}>
                        <IconString
                          icon={<LocalPhoneIcon />}
                          delay={100}
                          className={cn(s.iconLine)}
                        >
                          {p.phone} {p.title ? `- ${p.title}` : ''}
                        </IconString>
                      </a>
                    ))
                  : null}
              </div>
              <div className={cn(s.emails)}>
                {club.attributes.Emails && !isEmptyArray(club.attributes.Emails)
                  ? club.attributes.Emails.map((p: IEmail) => (
                      <a key={`email-${p.email}`} href={`mailto:${p.email}`}>
                        <IconString
                          icon={<LocalPhoneIcon />}
                          delay={100}
                          className={cn(s.iconLine)}
                        >
                          {p.email} {p.title ? `- ${p.title}` : ''}
                        </IconString>
                      </a>
                    ))
                  : null}
              </div>
            </DSection.Content.Container>
          )}
          {club.attributes.description && (
            <DSection.Content.Container
              colorType={3}
              className={cn(s.description)}
              title="Описание"
              index={1}
            >
              <ReactMarkdown>{club.attributes.description}</ReactMarkdown>
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
