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
      {({ data, index, style }) => {
        return (
          <Track
            album={data[index].attributes.album}
            author={author}
            key={`authors-track-${data[index].id}-${data[index].attributes.title}`}
            track={data[index]}
            className={cn(s.track)}
            style={style}
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
