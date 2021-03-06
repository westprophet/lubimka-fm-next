/**
 * Created by westp on 08.04.2022
 */

import React, { forwardRef, LegacyRef, useContext, useEffect } from 'react';
import s from './ChannelTitleSlider.module.scss';
import cn from 'classnames';
import Slider from 'react-slick';
import { IChannel } from 'interfaces/IChannel';
import useGetCurrentSlideByChannels from './hooks/useGetCurrentSlideByChannels';
import useGetSliderSettings from './hooks/useGetSliderSettings';
import { RadioPlayerContext } from '../../../../../../contexts/RadioPlayerManager';

export const ChannelTitleSlider = forwardRef(
  (
    { className, channel }: IChannelTitleSliderProps,
    ref: LegacyRef<HTMLHeadingElement> | undefined
  ) => {
    const { channel: current, channels } = useContext(RadioPlayerContext); // Получаем текущий канал
    const _channel = channel ?? current;
    const currentSlideIndex = useGetCurrentSlideByChannels(_channel, channels);
    const { sliderRef, settings } = useGetSliderSettings();
    useEffect(() => {
      if (sliderRef.current)
        // @ts-ignore
        sliderRef.current?.slickGoTo(currentSlideIndex);
    }, [currentSlideIndex, channels, sliderRef]);

    if (!channels) return null;
    return (
      <div ref={ref} className={cn(s.ChannelTitleSlider, className)}>
        {/*// @ts-ignore*/}
        <Slider ref={sliderRef} {...settings}>
          {channels.map((c: IChannel) => (
            <div key={`channel-${c.attributes.name}`}>{c.attributes.title}</div>
          ))}
        </Slider>
      </div>
    );
  }
);

ChannelTitleSlider.defaultProps = {
  className: '',
};

interface IChannelTitleSliderProps {
  className?: string;
  channel?: IChannel | null;
}

export default ChannelTitleSlider;
