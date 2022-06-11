/**
 * Created by westp on 30.05.2022
 */

import React, { useState } from 'react';
import s from './AuthorPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'layouts/DefaultLayout';
import { IAuthor } from 'interfaces/IAuthor';
import DSection from 'layouts/DefaultLayout/components/DoubleSection';
import { getImageUrl } from '@tools/IWrappedStrapiImage';
import ReactMarkdown from 'react-markdown';
import { ITrack } from 'interfaces/ITrack';
import { IAlbum } from 'interfaces/IAlbum';

import VerticalTrack from 'components/tracks/VerticalTrack';
import useAlbumsTracks from '@pages/AuthorPage/hooks/useAlbumsTracks';
import AlbumsSection from '@pages/AuthorPage/sections/AlbumsSection';
import TracksSection from '@pages/AuthorPage/sections/TracksSection';

export default function AuthorPage({ author }: IAuthorPageProps) {
  const [active, setActive] = useState<'tracks' | 'albums' | null>(null);
  const onClose = () => setActive(null);
  const cover = getImageUrl(author?.attributes.avatar);
  const albums = author.attributes.albums.data;
  let recommendedTrack = author.attributes.recommendedTrack?.data;
  if (!author) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const allTracks = useAlbumsTracks(albums, (t: ITrack, i: number, a: IAlbum) => {
    if (i === 0 && !recommendedTrack) recommendedTrack = t;
    return { ...t, attributes: { ...t.attributes, album: a } };
  });

  return (
    <DefaultLayout.Layout
      className={cn(s.AuthorPage)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DSection.Wrapper>
        <DSection.Preview.Wrapper cover={cover} className={cn(s.previewContainer)}>
          <DefaultLayout.PageTitle placeholder={'К Lubimka DJs'}>Назад</DefaultLayout.PageTitle>
          <DSection.Preview.Inner className={cn(s.previewInner)}>
            <h1 className={cn(s.title)}>{author.attributes.name}</h1>
          </DSection.Preview.Inner>
        </DSection.Preview.Wrapper>
        <DSection.QuadContent.Wrapper className={cn(s.content)}>
          {recommendedTrack && (
            <DSection.QuadContent.Container
              title={recommendedTrack ? 'Рекомендуем' : 'Новый трек'}
              colorType={1}
              className={cn(s.sector)}
            >
              <VerticalTrack track={recommendedTrack} className={cn(s.recommendedTrack)} />
            </DSection.QuadContent.Container>
          )}
          <TracksSection
            author={author}
            tracks={allTracks}
            className={s.sector}
            isShowDetail={active === 'tracks'}
            onClose={onClose}
            onOpen={() => setActive('tracks')}
          />
          <AlbumsSection
            author={author}
            albums={albums}
            className={s.sector}
            isShowDetail={active === 'albums'}
            onClose={onClose}
            onOpen={() => setActive('albums')}
          />
          <DSection.QuadContent.Container
            title="Описание"
            colorType={3}
            className={cn(s.description)}
          >
            <DSection.QuadContent.Inner>
              <ReactMarkdown>{author.attributes.description}</ReactMarkdown>
            </DSection.QuadContent.Inner>
          </DSection.QuadContent.Container>
        </DSection.QuadContent.Wrapper>
      </DSection.Wrapper>
    </DefaultLayout.Layout>
  );
}

interface IAuthorPageProps {
  author: IAuthor;
}
