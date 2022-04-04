import { useRef, useState } from 'react';

export default function useSliderData(swipe = false) {
  const [curSlide, setCurSlide] = useState(1);
  const sliderRef = useRef();
  const length = 8;
  const settings = {
    speed: 250,
    variableWidth: true,
    initialSlide: 0,
    slidesToScroll: 2,
    infinite: false,
    dots: false,
    arrows: false,
    swipe: swipe,
    allowTouchMove: swipe,
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
