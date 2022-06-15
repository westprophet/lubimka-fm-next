/**
 * Created by westp on 06.06.2022
 */

import React from 'react';
import s from './VerticalTrackRadioheart.module.scss';
import cn from 'classnames';
import VerticalTrackComponent from 'components/UI/VerticalTrackComponent';

import { ITrackRadioheartNext } from 'interfaces/ITrackRadioheart';
import { getTAudioTitleByString } from '@tools/ITrack';

export default function VerticalTrackRadioheart({ className, track }: IVerticalTrackProps) {
  const _title = track ? getTAudioTitleByString(track.name) : null;
  return (
    <VerticalTrackComponent
      className={cn(s.VerticalTrack, className)}
      title={_title}
      isShowCover
      disablePlayButton
    />
  );
}

VerticalTrackRadioheart.defaultProps = {
  className: '',
};

interface IVerticalTrackProps {
  className?: string;
  track: ITrackRadioheartNext | null;
}
