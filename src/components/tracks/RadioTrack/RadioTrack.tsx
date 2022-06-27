/**
 * Created by westp on 28.05.2022
 */

import React, { forwardRef, LegacyRef } from 'react';
import s from './RadioTrack.module.scss';
import cn from 'classnames';
import TrackComponent, { ITrackComponentProps } from 'components/UI/TrackComponent/TrackComponent';
import { ITrackRadioheart } from 'interfaces/ITrackRadioheart';
import useGetTAudioByString from 'hooks/others/useGetTAudioByString';
import useImageState from 'hooks/useImageState';
import isValidITrackRadioheartPrev from '../../../validations/isValidITrackRadioheartPrev';
import AdditionalMenu from 'components/tracks/RadioTrack/components/AdditionalMenu';

const RadioTrack = forwardRef((p: IRadioTrackProps, ref: LegacyRef<HTMLDivElement> | undefined) => {
  const title = useGetTAudioByString(p.track.name); //Получаем название трека и автора
  const { image: cover } = useImageState(title, p.isCanFetchImage && p.isShowCover);
  if (!p.track) return null;
  const isTrackRadioPrev = isValidITrackRadioheartPrev(p.track);

  let children = p.children;
  if (!children)
    if (!isTrackRadioPrev)
      // @ts-ignore
      children = <AdditionalMenu trackID={p.track?.id} />;
    // @ts-ignore
    else if (p.track?.time) children = <span className={cn(s.time)}>{p.track.time}</span>;

  return (
    <TrackComponent
      forwardedRef={ref}
      className={cn(s.RadioTrack, p.className)}
      title={title}
      style={p.style}
      onClick={p.onClick}
      cover={cover}
      isClickable={p.isClickable}
    >
      {children}
    </TrackComponent>
  );
});

interface IRadioTrackProps extends ITrackComponentProps {
  track: ITrackRadioheart;
  isCanFetchImage?: boolean;
  isShowCover?: boolean;
}

export default RadioTrack;
