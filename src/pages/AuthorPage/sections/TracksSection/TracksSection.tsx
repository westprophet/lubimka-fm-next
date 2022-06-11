/**
 * Created by westp on 08.06.2022
 */

import React from 'react';
import s from './TracksSection.module.scss';
import cn from 'classnames';
import { QuadContentSection as QS } from 'layouts/DefaultLayout/components/DoubleSection/';
import { ITrack } from 'interfaces/ITrack';
import Track from 'components/tracks/Track';
import { IAuthor } from 'interfaces/IAuthor';
import HiddenSideTrackList from 'components/tracks/HiddenSideITrackList';

export default function TracksSection({
  className,
  isShowDetail,
  tracks,
  onClose,
  onOpen,
  author,
}: IAlbumsSectionProps) {
  return (
    <>
      <QS.Container
        title="Треки"
        other={{
          title: 'Все',
          onClick: onOpen,
        }}
        colorType={3}
        className={cn(s.TracksSection, className)}
      >
        <QS.Inner className={cn(s.inner)} withHorizontalPadding={false}>
          {tracks.slice(0, 10).map((t: ITrack) => {
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
        </QS.Inner>
      </QS.Container>
      <HiddenSideTrackList
        onClose={onClose}
        tracks={tracks}
        author={author}
        isShow={isShowDetail}
        title={`Треки ${author.attributes.name}`}
      />
    </>
  );
}

TracksSection.defaultProps = {
  className: undefined,
};

interface IAlbumsSectionProps {
  className?: string;
  tracks: ITrack[];
  isShowDetail: boolean;
  onOpen(): any;
  onClose(): any;
  author: IAuthor;
}
