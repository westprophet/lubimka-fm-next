/**
 * Created by westp on 06.06.2022
 */

import React from 'react';
import s from './VerticalTrackComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { DATA_FOR_BLUR_ALT } from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import useImageState from 'hooks/useImageState';
import TAudioTitle from '../../../types/TAudioTitle';

// @ts-ignore
import Marquee from 'react-double-marquee';
import PlayButton from 'components/UI/buttons/PlayButton';

export default function VerticalTrackComponent({
  className,
  isShowCover,
  isCanFetchImage,
  title,
  cover,
  source,
}: IVerticalTrackDataProps) {
  // Запрашиваем картинку для трека
  const { image } = useImageState(title, isCanFetchImage && isShowCover);
  const _cover = image ?? cover;
  const isNoImg = typeof image !== 'string' || !_cover;
  return (
    <div className={cn(s.VerticalTrack, className)}>
      {isShowCover && (
        <div className={cn(s.cover, 'cover', { [s.noImageContainer]: isNoImg })}>
          <PlayButton status="paused" type={2} onClick={() => {}} className={cn(s.playA)} />
          {!isNoImg ? (
            <Image src={_cover} layout="fill" placeholder="blur" blurDataURL={DATA_FOR_BLUR_ALT} />
          ) : (
            <NoImage className={cn(s.noImg)} />
          )}
        </div>
      )}
      <div className={cn(s.content)}>
        <PlayButton status="paused" type={2} onClick={() => {}} className={cn(s.playD)} />

        <div className={cn(s.title, 'title')}>
          <div className={cn(s.name)}>
            <Marquee scrollWhen="overflow" direction="left">
              {title?.title}
            </Marquee>
          </div>
          <div className={cn(s.artist, 'artist')}>
            <Marquee scrollWhen="overflow" direction="left">
              {title?.artist}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

VerticalTrackComponent.defaultProps = {
  className: '',
  isShowCover: true,
};

export interface IVerticalTrackProps {
  className?: string;
  isCanFetchImage?: boolean;
  isShowCover?: boolean;
}

interface IVerticalTrackDataProps extends IVerticalTrackProps {
  title: TAudioTitle | null;
  source?: string;
  cover?: string | null;
}
