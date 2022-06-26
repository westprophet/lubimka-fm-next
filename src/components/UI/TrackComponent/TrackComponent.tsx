/**
 * Created by westp on 02.05.2022
 */

// @ts-ignore
import React, { CSSProperties, forwardRef, LegacyRef } from 'react';
import s from './TrackComponent.module.scss';
import cn from 'classnames';
import TAudioTitle from '../../../types/TAudioTitle';
import Image from 'next/image';
import { DATA_FOR_BLUR_ALT } from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';

// @ts-ignore
import Marquee from 'react-double-marquee';
import useHover from 'hooks/useHover';

const TrackComponent = forwardRef(
  (p: ITrackComponentDataProps, ref?: LegacyRef<HTMLDivElement>) => {
    const isNoImg = !p.cover;
    const { onMouseOverHandler, onMouseLeaveHandler, hover } = useHover();
    const speed = 0.04,
      delay = 500;
    return (
      <div
        ref={ref}
        className={cn(s.T, 'track', { [s.c]: p.isClickable }, p.className)}
        style={p.style}
        onClick={p.isClickable ? p.onClick : () => {}}
        onMouseOver={onMouseOverHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <div className={cn(s.cover, 'cover', { [s.noImageContainer]: isNoImg })}>
          {!isNoImg ? (
            // @ts-ignore
            <Image src={p.cover} layout="fill" placeholder="blur" blurDataURL={DATA_FOR_BLUR_ALT} />
          ) : (
            <NoImage className={cn(s.noImg)} />
          )}
        </div>
        <div className={cn(s.title, 'title')}>
          <div className={cn(s.name)}>
            {hover ? (
              <Marquee scrollWhen="overflow" direction="left" speed={speed} delay={delay}>
                {p.title?.title}
              </Marquee>
            ) : (
              p.title?.title
            )}
          </div>
          <div className={cn(s.artist, 'artist')} suppressHydrationWarning>
            {hover ? (
              <Marquee scrollWhen="overflow" direction="left" speed={speed} delay={delay}>
                {p.title?.artist}
              </Marquee>
            ) : (
              p.title?.artist
            )}
          </div>
        </div>
        <div className={cn(s.actionContainer, 'actions')}>
          {p.children}
          {/*{p.isShowMenu && (*/}
          {/*  <IconButton>*/}
          {/*    <MoreHorizIcon />*/}
          {/*  </IconButton>*/}
          {/*)}*/}
        </div>
      </div>
    );
  }
);

TrackComponent.defaultProps = {
  className: '',
  isShowMenu: true,
};

export interface ITrackComponentProps {
  className?: string;
  isShowMenu?: boolean;
  isClickable?: boolean;
  onClick?(): any;
  style?: CSSProperties;
  children?: any;
  index?: number;
  cover?: string | null;
  forwardedRef?: LegacyRef<HTMLDivElement>;
}

interface ITrackComponentDataProps extends ITrackComponentProps {
  title: TAudioTitle | null;
  source?: string;
}

export default TrackComponent;
