/**
 * Created by westp on 30.05.2022
 */

// @ts-ignore
import React, { useState } from 'react';
import s from './AuthorPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'layouts/DefaultLayout';
import { IAuthor } from 'interfaces/IAuthor';
import DSection from 'layouts/DefaultLayout/components/DoubleSection';
import ReactMarkdown from 'react-markdown';
import { ITrack } from 'interfaces/ITrack';
import { IAlbum } from 'interfaces/IAlbum';

import VerticalTrack from 'components/tracks/VerticalTrack';
import useAlbumsTracks from '@pages/AuthorPage/hooks/useAlbumsTracks';
import AlbumsSection from '@pages/AuthorPage/sections/AlbumsSection';
import TracksSection from '@pages/AuthorPage/sections/TracksSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../constants/DATA_FOR_BLUR';
import { getCover } from '@tools/IAuthor';

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

export default function AuthorPage({ author }: IAuthorPageProps) {
  const [active, setActive] = useState<TSector>(null);

  const onClose = () => setActive(null);
  const albums = author.attributes.albums.data;
  let recommendedTrack = author.attributes.recommendedTrack?.data;
  if (!author) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const allTracks = useAlbumsTracks(albums, (t: ITrack, i: number, a: IAlbum) => {
    if (i === 0 && !recommendedTrack) recommendedTrack = t;
    return { ...t, attributes: { ...t.attributes, album: a } };
  });

  const cover = getCover(author);

  return (
    <DefaultLayout.Layout
      className={cn(s.AuthorPage)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DSection.Wrapper>
        <DSection.Preview.Wrapper cover={cover} className={cn(s.previewContainer)}>
          <DefaultLayout.PageTitle
            leftMargin={false}
            breadcrumbs={[
              {
                title: "Lubimka DJ's",
                link: '/lubimka-djs',
              },
              {
                title: author.attributes.name,
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
            <h1 className={cn(s.title)}>{author.attributes.name}</h1>
          </DSection.Preview.Inner>
        </DSection.Preview.Wrapper>
        <DSection.QuadContent.Wrapper className={cn(s.content)}>
          {recommendedTrack && (
            <DSection.QuadContent.Container
              index={1}
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
          {author.attributes.description ? (
            <DSection.QuadContent.Container
              title="Описание"
              colorType={3}
              className={cn(s.description)}
              index={4}
            >
              <DSection.QuadContent.Inner>
                <ReactMarkdown>{author.attributes.description}</ReactMarkdown>
              </DSection.QuadContent.Inner>
            </DSection.QuadContent.Container>
          ) : null}
        </DSection.QuadContent.Wrapper>
      </DSection.Wrapper>
    </DefaultLayout.Layout>
  );
}

type TSector = 'tracks' | 'albums' | null;
interface IAuthorPageProps {
  author: IAuthor;
}
