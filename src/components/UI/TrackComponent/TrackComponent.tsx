/**
 * Created by westp on 02.05.2022
 */

import React, { CSSProperties } from 'react';
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
  style,
  isShowCover,
  onClick,
  children,
  isClickable,
  small,
  isCanFetchImage,
}: ITrackComponentDataProps) {
  const { image } = useImageState(title, isCanFetchImage && isShowCover); // Запрашиваем картинку для трека
  const isNoImg = typeof image !== 'string';
  return (
    <div
      className={cn(s.T, { [s.dsc]: !isShowCover }, { [s.c]: isClickable }, className, {
        [s.small]: small,
      })}
      style={style}
      onClick={isClickable ? onClick : () => {}}
    >
      {isShowCover && (
        <div className={cn(s.cover, 'cover', { [s.noImageContainer]: isNoImg })}>
          {!isNoImg ? (
            <Image src={image} layout="fill" placeholder="blur" blurDataURL={DATA_FOR_BLUR} />
          ) : (
            <NoImage className={cn(s.noImg)} />
          )}
        </div>
      )}
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
      <div className={cn(s.actionContainer, 'actions')}>
        {children}
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
  small: true,
};

export interface ITrackComponentProps {
  className?: string;
  isCanFetchImage?: boolean;
  isShowCover?: boolean;
  isClickable?: boolean;
  onClick?(): any;
  style?: CSSProperties;
  children?: any;
  small?: boolean;
  // additionalButton?: any;
}

interface ITrackComponentDataProps extends ITrackComponentProps {
  title: TAudioTitle | null;
  id?: string | number;
}
