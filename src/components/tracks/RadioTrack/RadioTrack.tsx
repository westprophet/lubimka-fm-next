/**
 * Created by westp on 28.05.2022
 */

import React from 'react';
import s from './RadioTrack.module.scss';
import cn from 'classnames';
import TrackComponent from 'components/UI/TrackComponent/TrackComponent';
import { ITrackRadioheart } from 'interfaces/ITrackRadioheart';
import useGetTAudioByString from 'hooks/others/useGetTAudioByString';

export default function RadioTrack({
  className,
  track,
  isCanFetchImage,
  isShowCover,
}: IRadioTrackProps) {
  const title = useGetTAudioByString(track.name); //Получаем название трека и автора
  if (!track) return null;
  return (
    <TrackComponent
      className={cn(s.RadioTrack, className)}
      title={title}
      isCanFetchImage={isCanFetchImage}
      isShowCover={isShowCover}
    />
  );
}

RadioTrack.defaultProps = {
  className: '',
  isCanFetchImage: true,
  isShowCover: true,
};

interface IRadioTrackProps {
  className?: string;
  track: ITrackRadioheart;
  isCanFetchImage?: boolean;
  isShowCover?: boolean;
}
