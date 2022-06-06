/**
 * Created by westp on 06.06.2022
 */

import React from 'react';
import s from './VerticalTrack.module.scss';
import cn from 'classnames';
import VerticalTrackComponent from 'components/UI/VerticalTrackComponent';
import { ITrack } from 'interfaces/ITrack';
import TAudioTitle from '../../../types/TAudioTitle';
import { IAuthor } from 'interfaces/IAuthor';
import { IAlbum } from 'interfaces/IAlbum';
import { getImageUrl } from '@tools/IWrappedStrapiImage';

export default function VerticalTrack({ className, track, album, author }: IVerticalTrackProps) {
  const cover = getImageUrl(track.attributes.cover);
  const title: TAudioTitle = {
    artist: track.attributes.author ?? album?.attributes.creators ?? author?.attributes.name,
    title: track.attributes.title,
  };
  return (
    <VerticalTrackComponent
      className={cn(s.VerticalTrack, className)}
      title={title}
      cover={cover}
    />
  );
}

VerticalTrack.defaultProps = {
  className: '',
};

interface IVerticalTrackProps {
  className?: string;
  track: ITrack;
  author?: IAuthor;
  album?: IAlbum;
}
