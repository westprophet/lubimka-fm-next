/**
 * Created by westp on 11.06.2022
 */

import React from 'react';
import s from './LastTracksSection.module.scss';
import cn from 'classnames';
import { QuadContentSection as QS } from 'layouts/DefaultLayout/components/DoubleSection';

import HiddenSideITrackRadioheartList from 'components/tracks/HiddenSideITrackRadioheartList';
import { ITrackRadioheartPrev } from 'interfaces/ITrackRadioheart';
import Track from 'components/tracks/RadioTrack';
import IChannel from 'interfaces/IChannel';
import useLastTracks from 'hooks/channel/useLastTracks';
import TAudioTitle from 'types/TAudioTitle';

export default function LastTracksSection({
  isShowDetail,
  onClose,
  onOpen,
  title,
  channel,
}: INewTracksSectionProps) {
  const { data: tracks, isLoading } = useLastTracks({ c: channel, title });
  return (
    <>
      <QS.Container
        title="История"
        disableHorizontalPadding
        colorType={3}
        isLoading={isLoading}
        other={{
          title: 'Все',
          onClick: onOpen,
        }}
        className={cn(s.LastTracksSection)}
      >
        <QS.Inner className={cn(s.albumsInner)} withHorizontalPadding={false}>
          {tracks?.slice(0, 6).map((t: ITrackRadioheartPrev) => {
            return <Track key={`radioheart-track-${t.name}`} track={t} className={cn(s.track)} />;
          })}
        </QS.Inner>
      </QS.Container>
      <HiddenSideITrackRadioheartList
        onClose={onClose}
        tracks={tracks ?? []}
        isShow={isShowDetail}
        title={`История эфира`}
      />
    </>
  );
}

interface INewTracksSectionProps {
  channel: IChannel;
  title: TAudioTitle | null;
  isShowDetail: boolean;
  onOpen(): any;
  onClose(): any;
}
