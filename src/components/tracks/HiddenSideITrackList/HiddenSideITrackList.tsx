/**
 * Created by westp on 11.06.2022
 */

import React from 'react';
import s from './HiddenSideITrackList.module.scss';
import cn from 'classnames';
import HiddenSideTrackList, { ITrackListProps } from 'components/tracks/HiddenSideTrackList';
import { ITrack } from 'interfaces/ITrack';
import Track from 'components/tracks/Track';
import { IAuthor } from 'interfaces/IAuthor';

export default function HiddenSideITrackList({
  className,
  tracks,
  title,
  isShow,
  onClose,
  author,
}: IHiddenSideITrackListProps) {
  return (
    <HiddenSideTrackList
      className={cn(s.HiddenSideITrackList, className)}
      tracks={tracks}
      onClose={onClose}
      isShow={isShow}
      title={title}
      onFilter={(value: ITrack, search: string) =>
        value.attributes.title.toLocaleLowerCase().includes(String(search?.toLocaleLowerCase()))
      }
    >
      {(t: ITrack) => {
        return (
          <Track
            album={t.attributes.album}
            author={author}
            key={`strapi-track-${t.id}`}
            track={t}
            className={cn(s.track)}
          />
        );
      }}
    </HiddenSideTrackList>
  );
}

HiddenSideITrackList.defaultProps = {
  className: '',
};

interface IHiddenSideITrackListProps extends ITrackListProps<ITrack> {
  className?: string;
  tracks: ITrack[];
  author: IAuthor;
}
