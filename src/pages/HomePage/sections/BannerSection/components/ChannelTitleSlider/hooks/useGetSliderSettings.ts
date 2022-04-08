import { useRef } from 'react';

//Получаем данные для слайдера
export default function useGetSliderSettings(currentSlide = 1) {
  const sliderRef = useRef();
  const settings = {
    speed: 250,
    variableWidth: false,
    arrows: false,
    initialSlide: currentSlide,
    infinite: false,
    dots: false,
    vertical: true,
    swipe: false,
    allowTouchMove: false,
    // afterChange: (cs) => setCurSlide(Number(cs) + 1),
  };
  return {
    sliderRef,
    settings,
  };
}
