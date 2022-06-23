/**
 * Created by westp on 01.05.2022
 */

import React, { useEffect, useRef } from 'react';
import s from './ChannelTitle.module.scss';
import cn from 'classnames';
import TAudioTitle from '../../../../../../types/TAudioTitle';
import DotsLoader from 'components/DotsLoader';
// @ts-ignore
import Marquee from 'react-double-marquee';

export default function ChannelTitle({ className, title, isLoading, isError }: IChannelTitleProps) {
  const prevTitle = useRef(title);
  const isEmptyTitle = !title;
  useEffect(() => {
    if (!isEmptyTitle) prevTitle.current = { ...title };
  }, [isEmptyTitle, title]);

  const _artist = !isEmptyTitle ? title?.artist : prevTitle.current?.artist;
  const _title = !isEmptyTitle ? title?.title : prevTitle.current?.title;

  const _isLoading =
    isLoading ||
    (!prevTitle.current?.artist && !title?.artist && !title?.title && !prevTitle.current?.title);

  return (
    <div className={cn(s.ChannelTitle, { [s.error]: isError }, className)}>
      <div className={cn(s.author)}>
        {_isLoading ? (
          <DotsLoader />
        ) : (
          <Marquee scrollWhen="overflow" direction="left">
            {_artist}
          </Marquee>
        )}
      </div>
      <div className={cn(s.track)}>
        {_isLoading ? (
          <DotsLoader />
        ) : (
          <Marquee scrollWhen="overflow" direction="left">
            {_title}
          </Marquee>
        )}
      </div>
    </div>
  );
}

ChannelTitle.defaultProps = {
  className: '',
  isLoading: false,
  isError: false,
};

interface IChannelTitleProps {
  className?: string;
  title: TAudioTitle | null;
  isLoading?: boolean;
  isError?: boolean;
}
