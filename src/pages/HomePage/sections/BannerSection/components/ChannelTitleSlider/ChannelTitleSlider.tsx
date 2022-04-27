/**
 * Created by westp on 08.04.2022
 */

import React, { useContext, useEffect } from 'react';
import s from './ChannelTitleSlider.module.scss';
import cn from 'classnames';
import Slider from 'react-slick';
import { ChannelManagerContext } from '../../../../../../contexts/ChannelManager';
import { IChannel } from '../../../../../../interfaces';
import useGetCurrentSlideByChannels from './hooks/useGetCurrentSlideByChannels';
import useGetSliderSettings from './hooks/useGetSliderSettings';

export default function ChannelTitleSlider({ className }: IChannelTitleSliderProps) {
  const { current: channel, channels } = useContext(ChannelManagerContext); // Получаем текущий канал
  const currentSlideIndex = useGetCurrentSlideByChannels(channel, channels);
  const { sliderRef, settings } = useGetSliderSettings();
  useEffect(() => {
    if (sliderRef.current)
      // @ts-ignore
      sliderRef.current?.slickGoTo(currentSlideIndex);
  }, [currentSlideIndex, channels, sliderRef]);

  if (!channels) return null;
  return (
    <div className={cn(s.ChannelTitleSlider, className)}>
      {/*// @ts-ignore*/}
      <Slider ref={sliderRef} {...settings}>
        {channels.map((c: IChannel) => (
          <div key={`channel-${c.attributes.name}`}>{c.attributes.title}</div>
        ))}
      </Slider>
    </div>
  );
}

ChannelTitleSlider.defaultProps = {
  className: '',
};

interface IChannelTitleSliderProps {
  className?: string;
}
