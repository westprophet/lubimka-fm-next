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
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MiniMap from './sections/MiniMap';

export default function EventPage({ event, club }: IEventPageProps) {
  const cover = getImageUrl(event.attributes.preview);
  const date = useGetEventDate(event.attributes.startDate, event.attributes.endDate);
  return (
    <DefaultLayout.Layout
      className={cn(s.EventPage)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DSection.Wrapper>
        <DSection.Preview.Wrapper cover={cover} className={cn(s.previewContainer)}>
          <DefaultLayout.PageTitle placeholder={'На главную'}>Назад</DefaultLayout.PageTitle>
          <DSection.Preview.Inner>
            <h1 className={cn(s.title)}>{event.attributes.title}</h1>
          </DSection.Preview.Inner>
        </DSection.Preview.Wrapper>
        <DSection.Content.Wrapper className={cn(s.tabs)}>
          {club && (
            <DSection.Content.Container colorType={1}>
              <SimpleClubComponent club={club} />
            </DSection.Content.Container>
          )}
          {
            <DSection.Content.Container
              title="Музыкальный фестиваль"
              colorType={3}
              className={cn(s.about)}
            >
              <IconString icon={<AccessTimeIcon />}>{date}</IconString>
              <IconString icon={<FmdGoodIcon />}>{event.attributes.address}</IconString>
              <MiniMap />
              {event.attributes.description && (
                <DSection.Content.Container
                  colorType={1}
                  className={cn(s.description)}
                  title="Описание"
                >
                  <ReactMarkdown>{event.attributes.description}</ReactMarkdown>
                </DSection.Content.Container>
              )}
            </DSection.Content.Container>
          }
        </DSection.Content.Wrapper>
      </DSection.Wrapper>
    </DefaultLayout.Layout>
  );
}

interface IEventPageProps {
  event: IEvent;
  club: IClub;
}
