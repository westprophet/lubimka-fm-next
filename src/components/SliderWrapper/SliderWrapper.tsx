/**
 * Created by westp on 31.03.2022
 */

import React, { Children } from 'react';
import s from './SliderWrapper.module.scss';
import cn from 'classnames';
import Slider from 'react-slick';
import useSliderData from './hooks/useSliderData';

//Это обертка над слайдером, нужно обернуть в контекст
export default function SliderWrapper({ className, children, swipe }: ISliderWrapperProps) {
  const count = Children.count(children);
  const { settings, ref } = useSliderData(count, swipe); //Прячем настройки и прочую штуку сюда
  if (!children) return null;
  return (
    <Slider ref={ref} {...settings} className={cn(s.SliderWrapper, className)}>
      {children}
    </Slider>
  );
}

SliderWrapper.defaultProps = {
  className: '',
};

interface ISliderWrapperProps {
  className?: string;
  children: any;
  swipe?: boolean;
}
