/**
 * Created by westp on 11.06.2022
 */

import React from 'react';
import s from './NewTracksSection.module.scss';
import cn from 'classnames';
import { QuadContentSection as QS } from 'layouts/DefaultLayout/components/DoubleSection';

import { ITrackRadioheartNew } from 'interfaces/ITrackRadioheart';
import Track, { MRadioTrack } from 'components/tracks/RadioTrack';
import HiddenSideITrackRadioheartList from 'components/tracks/HiddenSideITrackRadioheartList';
import useGetNewTracks from 'hooks/channel/useGetNewTracks';
import IChannel from 'interfaces/IChannel';
// const variants = {
//   visible: (i: number) => ({
//     opacity: 1,
//     transition: {
//       delay: i * 0.3 + 4,
//     },
//   }),
//   hidden: { opacity: 0 },
// };
export default function NewTracksSection({
  isShowDetail,
  onClose,
  onOpen,
  initialTracks,
  channel,
}: INewTracksSectionProps) {
  const { data: tracks, isLoading } = useGetNewTracks({ c: channel, initialTracks: initialTracks });
  return (
    <>
      <QS.Container
        index={2}
        title="Новинки"
        disableHorizontalPadding
        colorType={2}
        isLoading={isLoading}
        other={{
          title: 'Все',
          onClick: onOpen,
        }}
        className={cn(s.NewTracksSection)}
      >
        <QS.Inner className={cn(s.albumsInner)} withHorizontalPadding={false}>
          {tracks?.slice(0, 6).map((t: ITrackRadioheartNew, index: number) => {
            return (
              <MRadioTrack
                // custom={index}
                // variants={variants}
                // animate="visible"
                // initial="hidden"
                key={`radioheart-track-${t.name}`}
                track={t}
                className={cn(s.track)}
              />
            );
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
  channel: IChannel;
  initialTracks?: ITrackRadioheartNew[] | null;
  isShowDetail: boolean;
  onOpen(): any;
  onClose(): any;
}
