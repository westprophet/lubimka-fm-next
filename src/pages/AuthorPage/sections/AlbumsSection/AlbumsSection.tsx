/**
 * Created by westp on 08.06.2022
 */

import React, { useState } from 'react';
import s from './AlbumsSection.module.scss';
import cn from 'classnames';
import { QuadContentSection as QS } from 'layouts/DefaultLayout/components/DoubleSection/';
import { IAlbum } from 'interfaces/IAlbum';
import Album from 'components/Album';
// import DSection from 'layouts/DefaultLayout/components/DoubleSection';
import { IAuthor } from 'interfaces/IAuthor';
import HiddenSideTrackList from 'components/tracks/HiddenSideITrackList';
import isEmptyArray from 'utils/isEmptyArray';

export default function AlbumsSection({
  className,
  isShowDetail,
  albums,
  author,
  onClose,
  onOpen,
}: IAlbumsSectionProps) {
  const [currentAlbum, setCurrentAlbum] = useState<IAlbum | null>(null);
  if (isEmptyArray(albums)) return null;
  return (
    <>
      <QS.Container
        title="Альбомы"
        disableHorizontalPadding
        colorType={2}
        index={3}
        className={cn(s.AlbumsSection, className)}
      >
        <QS.Inner className={cn(s.albumsInner)} withHorizontalPadding={false}>
          {albums.map((a: IAlbum) => {
            return (
              <Album
                hover
                key={`album-${a.id}`}
                album={a}
                className={cn(s.item)}
                onClick={() => {
                  setCurrentAlbum(a);
                  onOpen();
                }}
              />
            );
          })}
        </QS.Inner>
      </QS.Container>
      <HiddenSideTrackList
        onClose={onClose}
        tracks={currentAlbum?.attributes.tracks.data ?? []}
        author={author}
        isShow={isShowDetail}
        title={`Треки ${currentAlbum?.attributes.title}`}
      />
    </>
  );
}

AlbumsSection.defaultProps = {
  className: '',
};

interface IAlbumsSectionProps {
  className?: string;
  albums: IAlbum[];
  author: IAuthor;

  isShowDetail: boolean;
  onOpen(): any;
  onClose(): any;
}
