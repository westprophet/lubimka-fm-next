/**
 * Created by westp on 11.06.2022
 */

import React from 'react';
import s from './NewTracksSection.module.scss';
import cn from 'classnames';
import { QuadContentSection as QS } from 'layouts/DefaultLayout/components/DoubleSection';

import { ITrackRadioheartNew } from 'interfaces/ITrackRadioheart';
import Track from 'components/tracks/RadioTrack';
import HiddenSideITrackRadioheartList from 'components/tracks/HiddenSideITrackRadioheartList';

export default function NewTracksSection({
  isShowDetail,
  tracks,
  onClose,
  onOpen,
}: INewTracksSectionProps) {
  if (!tracks) return null;
  return (
    <>
      <QS.Container
        title="Новинки"
        disableHorizontalPadding
        colorType={2}
        other={{
          title: 'Все',
          onClick: onOpen,
        }}
        className={cn(s.NewTracksSection)}
      >
        <QS.Inner className={cn(s.albumsInner)} withHorizontalPadding={false}>
          {tracks?.slice(0, 6).map((t: ITrackRadioheartNew) => {
            return <Track key={`radioheart-track-${t.name}`} track={t} className={cn(s.track)} />;
          })}
        </QS.Inner>
      </QS.Container>
      <HiddenSideITrackRadioheartList
        onClose={onClose}
        tracks={tracks ?? []}
        isShow={isShowDetail}
        title={`Новинки эфира`}
      />
    </>
  );
}

interface INewTracksSectionProps {
  tracks: ITrackRadioheartNew[] | null;
  isShowDetail: boolean;
  onOpen(): any;
  onClose(): any;
}
