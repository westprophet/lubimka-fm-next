/**
 * Created by westp on 02.05.2022
 */

import React from 'react';
import s from './TrackComponent.module.scss';
import cn from 'classnames';
import TAudioTitle from '../../../types/TAudioTitle';
import useImageState from '../../../hooks/useImageState';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';

// @ts-ignore
import Marquee from 'react-double-marquee';

export default function TrackComponent({
  className,
  title,
  id,
  isShowCover,
  // style,
  isCanFetchImage,
}: ITrackComponentProps) {
  const { image } = useImageState(title, isCanFetchImage && isShowCover); // Запрашиваем картинку для трека
  const isNoImg = typeof image !== 'string';
  return (
    <div className={cn(s.TrackComponent, { [s.isDontShowCover]: !isShowCover }, className)}>
      {isShowCover && (
        <div className={cn(s.cover, { [s.noImageContainer]: isNoImg })}>
          {!isNoImg ? (
            <Image src={image} layout="fill" placeholder="blur" blurDataURL={DATA_FOR_BLUR} />
          ) : (
            <NoImage className={cn(s.noImg)} />
          )}
        </div>
      )}
      <div className={cn(s.title)}>
        <div className={cn(s.name)}>
          <Marquee scrollWhen="overflow" direction="left">
            {title?.title}
          </Marquee>
        </div>
        <div className={cn(s.artist)}>
          <Marquee scrollWhen="overflow" direction="left">
            {title?.artist}
          </Marquee>
        </div>
      </div>
      <div className={cn(s.actionContainer)}>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </div>
  );
}

TrackComponent.defaultProps = {
  className: '',
  isCanFetchImage: true,
  isShowCover: true,
};

interface ITrackComponentProps {
  className?: string;
  title: TAudioTitle | null;
  isCanFetchImage?: boolean;
  isShowCover?: boolean;
  id?: string | number;
  // style?: CSSProperties | undefined;
}
