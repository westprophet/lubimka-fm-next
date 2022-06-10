/**
 * Created by westp on 05.06.2022
 */

import React from 'react';
import s from './Album.module.scss';
import cn from 'classnames';
import AlbumComponent, { IAlbumComponentProps } from 'components/UI/AlbumComponent';
import { IAlbum } from 'interfaces/IAlbum';
import { getImageUrl } from '@tools/IWrappedStrapiImage';
// import { useRouter } from 'next/router';

export default function Album({ className, album, onClick, hover }: IAlbumProps) {
  const cover = getImageUrl(album.attributes.cover);
  // const r = useRouter();
  const onClickHandle = () => {
    if (onClick) onClick();
  };
  return (
    <AlbumComponent
      title={album.attributes.title}
      cover={cover}
      hover={hover}
      onClick={onClickHandle}
      year={album.attributes.year}
      className={cn(s.Album, className)}
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
