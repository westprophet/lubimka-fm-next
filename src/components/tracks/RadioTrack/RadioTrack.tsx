/**
 * Created by westp on 28.05.2022
 */

import React from 'react';
import s from './RadioTrack.module.scss';
import cn from 'classnames';
import TrackComponent, { ITrackComponentProps } from 'components/UI/TrackComponent/TrackComponent';
import { ITrackRadioheart } from 'interfaces/ITrackRadioheart';
import useGetTAudioByString from 'hooks/others/useGetTAudioByString';

export default function RadioTrack(p: IRadioTrackProps) {
  const title = useGetTAudioByString(p.track.name); //Получаем название трека и автора
  if (!p.track) return null;
  return (
    <TrackComponent
      className={cn(s.RadioTrack, p.className)}
      title={title}
      isCanFetchImage={p.isCanFetchImage}
      isShowCover={p.isShowCover}
      style={p.style}
      onClick={p.onClick}
      isClickable={p.isClickable}
    >
      {p.children}
    </TrackComponent>
  );
}

interface IRadioTrackProps extends ITrackComponentProps {
  track: ITrackRadioheart;
}
