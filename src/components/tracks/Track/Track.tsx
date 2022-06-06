/**
 * Created by westp on 05.06.2022
 */

import React from 'react';
import s from './Track.module.scss';
import cn from 'classnames';
import { ITrack } from 'interfaces/ITrack';
import TrackComponent from 'components/UI/TrackComponent';
import TAudioTitle from '../../../types/TAudioTitle';
import { IAlbum } from 'interfaces/IAlbum';
import { IAuthor } from 'interfaces/IAuthor';

export default function Track({ author, album, track, className }: ITrackProps) {
  const title: TAudioTitle = {
    artist: track.attributes.author ?? album?.attributes.creators ?? author?.attributes.name,
    title: track.attributes.title,
  };
  return <TrackComponent title={title} className={cn(s.Track, className)} />;
}

Track.defaultProps = {
  className: '',
};

interface ITrackProps {
  className?: string;
  track: ITrack;
  author?: IAuthor;
  album?: IAlbum;
}
