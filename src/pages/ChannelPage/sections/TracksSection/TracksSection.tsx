/**
 * Created by westp on 02.05.2022
 */

import React from 'react';
import s from './TracksSection.module.scss';
import cn from 'classnames';
import TrackComponent from 'components/UI/TrackComponent';
import { IChannel } from 'interfaces/IChannel';
import TAudioTitle from '../../../../types/TAudioTitle';
import { ITrackRadioheart } from 'interfaces/ITrackRadioheart';
import { getTAudioTitleByString } from '../../../../tools/ITrack';
import useLastTracks from 'hooks/channel/lastTracks/useLastTracks';

export default function TracksSection({ className, channel, title }: ITracksSectionProps) {
  const _tracks = useLastTracks(channel, title);
  return (
    <div className={cn(s.TracksSection, className)}>
      <div className={cn(s.inner)}>
        {_tracks?.map((t: ITrackRadioheart) => {
          const _title = getTAudioTitleByString(t.name);
          return <TrackComponent key={t.name} title={_title} />;
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
