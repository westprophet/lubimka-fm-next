/**
 * Created by westp on 26.05.2022
 */

import React from 'react';
import s from './EventPage.module.scss';
import cn from 'classnames';
import DefaultLayout from '../../layouts/DefaultLayout';
import DSection from '../../layouts/DefaultLayout/components/DoubleSection';
import ReactMarkdown from 'react-markdown';
import { getImageUrl } from '../../tools/IWrappedStrapiImage';
import { IClub, IEvent } from '../../interfaces';
import SimpleClubComponent from './components/SimpleClubComponent';
import useGetEventDate from '../../hooks/others/useGetEventDate';
import IconString from 'components/UI/others/IconString';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../constants/DATA_FOR_BLUR';
import PlaceIcon from '@mui/icons-material/Place';
import MiniMap from 'components/MiniMap';
import ClubMapMarker from 'components/ClubMapMarker';

export default function EventPage({ event, club }: IEventPageProps) {
  const cover = getImageUrl(event.attributes.preview ?? club?.attributes.cover);
  const date = useGetEventDate(event.attributes.startDate, event.attributes.endDate);
  const lat = club.attributes.coords?.lat,
    lng = club.attributes.coords?.lng;
  return (
    <DefaultLayout.Layout
      className={cn(s.EventPage)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DSection.Wrapper>
        <DSection.Preview.Wrapper cover={cover} className={cn(s.previewContainer)}>
          <DefaultLayout.PageTitle
            className={cn(s.bread)}
            breadcrumbs={[
              {
                title: 'Мероприятия',
                link: '/club-life/events',
              },
              {
                title: event.attributes.title,
              },
            ]}
          />
          <DSection.Preview.Inner>
            {cover ? (
              <motion.div className={cn(s.cover)}>
                <Image
                  src={cover}
                  layout="fill"
                  objectFit="cover"
                  blurDataURL={DATA_FOR_BLUR}
                  placeholder="blur"
                />
              </motion.div>
            ) : null}
            <h1 className={cn(s.title)}>{event.attributes.title}</h1>
          </DSection.Preview.Inner>
        </DSection.Preview.Wrapper>
        <DSection.Content.Wrapper>
          {club && (
            <DSection.Content.Container colorType={1}>
              <SimpleClubComponent club={club} />
            </DSection.Content.Container>
          )}
          <DSection.Content.Container colorType={2} className={cn(s.additional)} title="Информация">
            <div className={cn(s.additionalInner)}>
              <IconString className={cn(s.date)} icon={<AccessTimeIcon />}>
                {date}
              </IconString>
            </div>
          </DSection.Content.Container>
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
            {lat && lng ? (
              <MiniMap
                coords={{
                  lat,
                  lng,
                }}
              >
                <ClubMapMarker club={club} isDestination />
              </MiniMap>
            ) : null}
          </DSection.Content.Container>
          {event.attributes.description && (
            <DSection.Content.Container
              colorType={1}
              className={cn(s.description)}
              title="Описание"
            >
              <ReactMarkdown>{event.attributes.description}</ReactMarkdown>
            </DSection.Content.Container>
          )}
        </DSection.Content.Wrapper>
      </DSection.Wrapper>
    </DefaultLayout.Layout>
  );
}

interface IEventPageProps {
  event: IEvent;
  club: IClub;
}
