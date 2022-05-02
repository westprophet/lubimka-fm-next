/**
 * Created by westp on 02.05.2022
 */

import React from 'react';
import s from './TracksSection.module.scss';
import cn from 'classnames';
import TrackComponent from 'components/UI/TrackComponent';
import useGetTracks from './hooks/useGetTracks';
import { IChannel } from '../../../../interfaces';
import TAudioTitle from '../../../../types/TAudioTitle';
import { ITrackRadioheartPrev } from '../../../../interfaces/ITrackRadioheart';
import { getTAudioTitleByString } from '../../../../tools/ITrack';

export default function TracksSection({ className, channel, title }: ITracksSectionProps) {
  const { data: tracks, isLoading } = useGetTracks(channel, title);
  return (
    <div className={cn(s.TracksSection, className)}>
      <div className={cn(s.inner)}>
        {tracks?.map((t: ITrackRadioheartPrev) => {
          const _title = getTAudioTitleByString(t.name);
          return <TrackComponent key={t.time} title={_title} />;
        })}
      </div>
    </div>
  );
}

TracksSection.defaultProps = {
  className: '',
};

interface ITracksSectionProps {
  className?: string;
  channel: IChannel;
  title: TAudioTitle | null;
}
