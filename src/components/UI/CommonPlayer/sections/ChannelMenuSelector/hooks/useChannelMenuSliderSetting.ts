import useIsMobile from '../../../../../../hooks/useIsMobile';
import { useRef, useState } from 'react';
import IChannel from '../../../../../../interfaces/IChannel';

export default function useChannelMenuSliderSetting(channels: IChannel[]) {
  const [curSlide, setCurSlide] = useState(1);
  const length = channels.length;
  const sliderRef = useRef();
  // const length = 8;
  const settings = {
    speed: 250,
    variableWidth: true,
    initialSlide: 0,
    slidesToScroll: 2,
    infinite: false,
    dots: false,
    arrows: false,
    swipe: false,
    allowTouchMove: false,
    afterChange: (cs) => setCurSlide(Number(cs) + 1),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          swipe: true,
          allowTouchMove: true,
        },
      },
    ],
  };
  return {
    settings,
    length,
    curSlide,
    setCurSlide,
    sliderRef,
  };
}
