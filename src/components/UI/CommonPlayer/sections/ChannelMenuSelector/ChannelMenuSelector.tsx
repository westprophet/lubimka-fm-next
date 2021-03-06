/**
 * Created by westp on 19.03.2022
 */

import React from 'react';
import s from './ChannelMenuSelector.module.scss';
import cn from 'classnames';
import SlickControlArrow from 'components/SlickControlArrow';
import IChannel from '../../../../../interfaces/IChannel';
import useIsMobile from 'src/hooks/useIsMobile';
import useChannelMenuSliderSetting from './hooks/useChannelMenuSliderSetting';
import Channel from 'components/Channel';

import Slider from 'react-slick';
//Селектор каналов в плеере
export default function ChannelMenuSelector({
  className,
  isOpen,
  channels,
}: IChannelMenuSelectorProps) {
  const isMobile = useIsMobile();
  //Прячем настройки и прочую штуку сюда
  const { settings, length, curSlide, sliderRef } = useChannelMenuSliderSetting(channels);
  return (
    <div
      className={cn(s.ChannelMenuSelector, 'with-screen-padding', { [s.open]: isOpen }, className)}
    >
      <div className={cn(s.header)}>
        <h2 className={cn(s.title)}>Каналы</h2>
        {length > 4 || isMobile ? (
          <SlickControlArrow current={curSlide} length={length} slider={sliderRef} />
        ) : null}
      </div>
      <div className={cn(s.inner)}>
        {/*// @ts-ignore*/}
        <Slider ref={sliderRef} {...settings} className={cn(s.slider)}>
          {channels.map((c: IChannel) => (
            <Channel key={c.attributes.name} channel={c} className={cn(s.slide)} typeSize="small" />
          ))}
        </Slider>
      </div>
    </div>
  );
}

ChannelMenuSelector.defaultProps = {
  className: '',
  // isOpen: true,
};

interface IChannelMenuSelectorProps {
  className?: string;
  isOpen: boolean | undefined | null;
  channels: IChannel[];
  channel: IChannel;
}
