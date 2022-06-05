/**
 * Created by westp on 05.06.2022
 */

import React from 'react';
import s from './Album.module.scss';
import cn from 'classnames';
import AlbumComponent from 'components/UI/AlbumComponent';
import { IAlbum } from 'interfaces/IAlbum';

export default function Album({ className, album }: IAlbumProps) {
  return <AlbumComponent album={album} className={cn(s.Album, className)} />;
}

Album.defaultProps = {
  className: '',
};

interface IAlbumProps {
  className?: string;
  album: IAlbum;
}
