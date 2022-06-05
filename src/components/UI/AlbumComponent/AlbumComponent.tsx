/**
 * Created by westp on 05.06.2022
 */

import React from 'react';
import s from './AlbumComponent.module.scss';
import cn from 'classnames';
import { IAlbum } from 'interfaces/IAlbum';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import { getImageUrl } from '@tools/IWrappedStrapiImage';
import PlayButton from 'components/UI/buttons/PlayButton';

export default function AlbumComponent({ className, album }: IAlbumComponentProps) {
  const cover = getImageUrl(album.attributes.cover);
  const isNoImg = !cover;
  return (
    <div className={cn(s.AlbumComponent, className)}>
      <div className={cn(s.cover, 'cover', { [s.noImageContainer]: isNoImg })}>
        <PlayButton status="paused" type={2} onClick={() => {}} className={cn(s.play)} />
        {!isNoImg ? (
          // @ts-ignore
          <Image src={cover} layout="fill" placeholder="blur" blurDataURL={DATA_FOR_BLUR} />
        ) : (
          <NoImage className={cn(s.noImg)} />
        )}
      </div>
      <div className={cn(s.description)}>
        <div className={cn(s.title)}>{album.attributes.title}</div>
        <div className={cn(s.year)}>{album.attributes.year}</div>
      </div>
    </div>
  );
}

AlbumComponent.defaultProps = {
  className: '',
};

interface IAlbumComponentProps {
  className?: string;
  album: IAlbum;
}
