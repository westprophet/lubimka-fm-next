/**
 * Created by westp on 02.05.2022
 */

// @ts-ignore
import React, { CSSProperties, startTransition, useState } from 'react';
import s from './TrackComponent.module.scss';
import cn from 'classnames';
import TAudioTitle from '../../../types/TAudioTitle';
import useImageState from '../../../hooks/useImageState';
import Image from 'next/image';
import { DATA_FOR_BLUR_ALT } from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';

// @ts-ignore
import Marquee from 'react-double-marquee';

export default function TrackComponent(p: ITrackComponentDataProps) {
  const [hover, setHover] = useState(false);
  const { image } = useImageState(p.title, p.isCanFetchImage && p.isShowCover);
  const isNoImg = typeof image !== 'string';
  const marqueSpeed = hover ? 0.04 : 0;
  const onMouseOverHandler = () => startTransition(() => setHover(true));
  const onMouseLeaveHandler = () => startTransition(() => setHover(false));

  return (
    <div
      className={cn(
        s.T,
        'track',
        { [s.dsc]: !p.isShowCover },
        { [s.c]: p.isClickable },
        p.className
      )}
      style={p.style}
      onClick={p.isClickable ? p.onClick : () => {}}
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {p.isShowCover && (
        <div className={cn(s.cover, 'cover', { [s.noImageContainer]: isNoImg })}>
          {!isNoImg ? (
            <Image src={image} layout="fill" placeholder="blur" blurDataURL={DATA_FOR_BLUR_ALT} />
          ) : (
            <NoImage className={cn(s.noImg)} />
          )}
        </div>
      )}
      <div className={cn(s.title, 'title')}>
        <div className={cn(s.name)}>
          <Marquee
            scrollWhen="overflow"
            direction="left"
            speed={marqueSpeed}
            suppressHydrationWarning
          >
            {p.title?.title}
          </Marquee>
        </div>
        <div className={cn(s.artist, 'artist')} suppressHydrationWarning>
          <Marquee scrollWhen="overflow" direction="left" speed={marqueSpeed}>
            {p.title?.artist}
          </Marquee>
        </div>
      </div>
      <div className={cn(s.actionContainer, 'actions')}>
        {p.children}
        {p.isShowMenu && (
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
}

TrackComponent.defaultProps = {
  className: '',
  isCanFetchImage: true,
  isShowCover: true,
  isShowMenu: true,
};

export interface ITrackComponentProps {
  className?: string;
  isCanFetchImage?: boolean;
  isShowCover?: boolean;
  isShowMenu?: boolean;
  isClickable?: boolean;
  onClick?(): any;
  style?: CSSProperties;
  children?: any;
}

interface ITrackComponentDataProps extends ITrackComponentProps {
  title: TAudioTitle | null;
  source?: string;
}
