/**
 * Created by westp on 05.06.2022
 */

import React from 'react';
import s from './Album.module.scss';
import cn from 'classnames';
import AlbumComponent, { IAlbumComponentProps } from 'components/UI/AlbumComponent';
import { IAlbum } from 'interfaces/IAlbum';
import { getImageUrl } from '@tools/IWrappedStrapiImage';

export default function Album({ className, album, onClick, hover }: IAlbumProps) {
  const SpotifyAPI = album.attributes.SpotifyApi;
  let cover: string | null = null;
  if (SpotifyAPI?.images) cover = SpotifyAPI?.images.middle;
  else cover = getImageUrl(album.attributes.cover);

  const onClickHandle = () => {
    if (onClick) onClick();
  };
  return (
    <AlbumComponent
      className={cn(s.Album, className)}
      title={album.attributes.title}
      cover={cover}
      hover={hover}
      onClick={onClickHandle}
      year={album.attributes.year}
    />
  );
}

Album.defaultProps = {
  className: '',
};

interface IAlbumProps extends IAlbumComponentProps {
  className?: string;
  album: IAlbum;
  onClick?(): any;
}
