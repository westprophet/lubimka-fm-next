/**
 * Created by westp on 05.06.2022
 */

import React from 'react';
import s from './Track.module.scss';
import cn from 'classnames';
import { ITrack } from 'interfaces/ITrack';
import TrackComponent, { ITrackComponentProps } from 'components/UI/TrackComponent';
import TAudioTitle from '../../../types/TAudioTitle';
import { IAlbum } from 'interfaces/IAlbum';
import { IAuthor } from 'interfaces/IAuthor';
import useImageState from 'hooks/useImageState';
import tools from '@tools/index';

export default function Track({
  author,
  album,
  track,
  className,
  isCanFetchImage,
  isShowCover,
}: ITrackProps) {
  const title: TAudioTitle = {
    artist: track.attributes.author ?? album?.attributes.creators ?? author?.attributes.name,
    title: track.attributes.title,
  };
  const cover = tools.IAlbum.getCover(album, 'small');
  const { image } = useImageState(title, isCanFetchImage && isShowCover && !cover);
  return <TrackComponent title={title} className={cn(s.Track, className)} cover={cover ?? image} />;
}

Track.defaultProps = {
  className: '',
};

interface ITrackProps extends ITrackComponentProps {
  className?: string;
  track: ITrack;
  author?: IAuthor;
  album?: IAlbum;
  isCanFetchImage?: boolean;
  isShowCover?: boolean;
}
