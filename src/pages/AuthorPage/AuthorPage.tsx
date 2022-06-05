/**
 * Created by westp on 30.05.2022
 */

import React from 'react';
import s from './AuthorPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'layouts/DefaultLayout';
import { IAuthor } from 'interfaces/IAuthor';
import DSection from 'layouts/DefaultLayout/components/DoubleSection';
import { getImageUrl } from '@tools/IWrappedStrapiImage';
import NewTrackSection from '@pages/AuthorPage/sections/NewTrackSection';
import ReactMarkdown from 'react-markdown';
import { ITrack } from 'interfaces/ITrack';
import Track from 'components/Track';
import { IAlbum } from 'interfaces/IAlbum';
import Album from 'components/Album';

export default function AuthorPage({ author }: IAuthorPageProps) {
  if (!author) return null;
  const cover = getImageUrl(author?.attributes.avatar);
  const albums = author.attributes.albums.data;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const _tracks = useAlbumsTracks(author.attributes.albums.data);
  return (
    <DefaultLayout.Layout
      className={cn(s.AuthorPage)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DSection.Wrapper>
        <DSection.Preview.Wrapper cover={cover} className={cn(s.previewContainer)}>
          <DefaultLayout.PageTitle placeholder={'На страницу Lubimka DJs'}>
            Назад
          </DefaultLayout.PageTitle>
          <DSection.Preview.Inner className={cn(s.previewInner)}>
            <h1 className={cn(s.title)}>{author.attributes.name}</h1>
          </DSection.Preview.Inner>
        </DSection.Preview.Wrapper>
        <DSection.QuadContent.Wrapper className={cn(s.content)}>
          <NewTrackSection />
          <DSection.QuadContent.Container
            title="Треки"
            colorType={3}
            className={cn(s.trackContainer)}
          >
            <div className={cn(s.trackInnerContainer)}>
              <div className={cn(s.tracks)}>
                {albums.map((a: IAlbum) => {
                  return a.attributes.tracks.data.map((t: ITrack) => {
                    return (
                      <Track album={a} author={author} key={`strapi-track-${t.id}`} track={t} />
                    );
                  });
                })}
              </div>
            </div>
          </DSection.QuadContent.Container>
          <DSection.QuadContent.Container
            title="Альбомы"
            colorType={1}
            className={cn(s.albumContainer)}
          >
            <div className={cn(s.albumInnerContainer)}>
              <div className={cn(s.album)}>
                {albums.map((a: IAlbum) => {
                  return <Album key={`album-${a.id}`} album={a} />;
                })}
                {albums.map((a: IAlbum) => {
                  return <Album key={`album-${a.id}`} album={a} />;
                })}
                {albums.map((a: IAlbum) => {
                  return <Album key={`album-${a.id}`} album={a} />;
                })}
                {albums.map((a: IAlbum) => {
                  return <Album key={`album-${a.id}`} album={a} />;
                })}
                {albums.map((a: IAlbum) => {
                  return <Album key={`album-${a.id}`} album={a} />;
                })}{' '}
                {albums.map((a: IAlbum) => {
                  return <Album key={`album-${a.id}`} album={a} />;
                })}
              </div>
            </div>
          </DSection.QuadContent.Container>
          <DSection.QuadContent.Container
            title="Описание"
            colorType={3}
            className={cn(s.description)}
          >
            <ReactMarkdown>{author.attributes.description}</ReactMarkdown>
          </DSection.QuadContent.Container>
        </DSection.QuadContent.Wrapper>
      </DSection.Wrapper>
    </DefaultLayout.Layout>
  );
}

interface IAuthorPageProps {
  author: IAuthor;
}
