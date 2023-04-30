/**
 * Created by westp on 29.05.2022
 */

import React, { useEffect } from 'react';
import s from './OrderTrackPage.module.scss';
import cn from 'classnames';

import DefaultLayout from 'layouts/DefaultLayout';
import { useRouter } from 'next/router';
import IChannel from 'interfaces/IChannel';
import useGetTAudioByString from 'hooks/others/useGetTAudioByString';
import useGetImage from 'hooks/useImageState';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import FormSection from '@pages/OrderTrackPage/section/FormSection';
import Link from 'next/link';

export default function OrderTrackPage({ channel }: ITrackPageProps) {
  const r = useRouter();
  const { id, name } = r.query;
  const _name = Array.isArray(name) ? name[0] : name;
  const _id = Array.isArray(id) ? id[0] : id;

  const isBrokeURL = !_name || !_id; // Если не указаны атрибуты

  const title = useGetTAudioByString(_name);
  const { image: cover } = useGetImage(title);
  const TRACKS_URL = `/broadcast/${channel.id}/order/tracks`;

  useEffect(() => {
    if (isBrokeURL) r.push(TRACKS_URL); //тогда перекидываем на страницу выбора трека
  }, [TRACKS_URL]);

  return (
    <DefaultLayout.Layout
      className={cn(s.OrderTrackPage)}
      header={{
        isFix: false,
        isFixedShow: true,
        isShow: true,
      }}
    >
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle
          className={cn(s.title)}
          title={`Заказ на канале: ${channel.attributes.title}`}
        />

        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner className={cn(s.inner)}>
            <div className={cn(s.cover)}>
              {cover ? (
                <Image src={cover} layout="fill" placeholder="blur" blurDataURL={DATA_FOR_BLUR} />
              ) : (
                <NoImage className={cn(s.noImg)} />
              )}
            </div>
            <p>
              Вы заказываете трек на канале:{' '}
              <b>
                <Link href={`/channels/${channel.id}/`}>
                  <a>{channel.attributes.title}</a>
                </Link>
              </b>
            </p>
            <div className={cn(s.name)}>
              <div className={cn(s.title)}>{title?.title}</div>
              <div className={cn(s.author)}>{title?.artist}</div>
            </div>
            <FormSection channel={channel} id={_id} className={cn(s.form)} title={title} />
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

interface ITrackPageProps {
  channel: IChannel;
}
