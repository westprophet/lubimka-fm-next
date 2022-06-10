/**
 * Created by westp on 10.06.2022
 */

// @ts-ignore
import React, { startTransition, useCallback, useState } from 'react';
import s from './TrackList.module.scss';
import cn from 'classnames';
import { ITrack } from 'interfaces/ITrack';
import DSection from 'layouts/DefaultLayout/components/DoubleSection';
import SearchInput from 'components/SearchInput';
import Track from 'components/tracks/Track';
import isEmptyString from 'utils/isEmptyString';
import { IAuthor } from 'interfaces/IAuthor';

export default function TrackList({
  className,
  tracks,
  isShow,
  title,
  onClose,
  author,
}: ITrackListProps) {
  const [searchValue, setSearchValue] = useState('');
  const allTracks = tracks;
  const onSearchHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchValue(e.target.value);
    });
  }, []);
  let filteredTracks = [...allTracks];

  if (!isEmptyString(searchValue))
    filteredTracks = allTracks?.filter((t: ITrack) =>
      t.attributes.title.toLocaleLowerCase().includes(String(searchValue?.toLocaleLowerCase()))
    );
  return (
    <DSection.HiddenAside.Wrapper open={isShow} className={cn(s.TrackList, className)}>
      <DSection.HiddenAside.Inner>
        <DSection.HiddenAside.Container>
          <DSection.HiddenAside.Title onClick={onClose}>{title}</DSection.HiddenAside.Title>
          <SearchInput onChange={onSearchHandler} />
        </DSection.HiddenAside.Container>
        <DSection.HiddenAside.Scroller className={cn(s.inner)}>
          {filteredTracks.map((t: ITrack) => {
            return (
              <Track
                album={t.attributes.album}
                author={author}
                key={`strapi-track-${t.id}`}
                track={t}
                className={cn(s.track)}
              />
            );
          })}
        </DSection.HiddenAside.Scroller>
      </DSection.HiddenAside.Inner>
    </DSection.HiddenAside.Wrapper>
  );
}

TrackList.defaultProps = {
  className: '',
  isShow: false,
};

interface ITrackListProps {
  className?: string;
  tracks: ITrack[];
  title: string;
  author: IAuthor;
  isShow: boolean;
  onClose(): any;
}
