/**
 * Created by westp on 08.04.2022
 */

import React from 'react';
import s from './DynamicChannelTitle.module.scss';
import cn from 'classnames';
import { MChannelTitleSlider as ChannelTitleSlider } from '@pages/HomePage/sections/BannerSection/components/ChannelTitleSlider';
import IChannel from 'interfaces/IChannel';

export default function DynamicChannelTitle({
  className,
  title,
  channel,
}: IDynamicChannelTitleProps) {
  return (
    <div className={cn(s.DynamicChannelTitle, 'fire-text-effect ', className)}>
      <h1>{title}</h1>
      <ChannelTitleSlider channel={channel} />
    </div>
  );
}

DynamicChannelTitle.defaultProps = {
  className: '',
  title: 'Lubimka',
};

interface IDynamicChannelTitleProps {
  className?: string;
  title?: string;
  channel?: IChannel | null;
}
