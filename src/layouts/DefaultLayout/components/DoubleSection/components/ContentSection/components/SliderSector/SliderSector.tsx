/**
 * Created by westp on 29.04.2022
 */

import React from 'react';
import s from './SliderSector.module.scss';
import cn from 'classnames';
import Slider, { withSliderWrapperManager } from 'components/SliderWrapper';

function SliderSector({ className, children }: ISliderSectorProps) {
  if (!children) {
    console.warn('SliderSector: nothing slides');
    return null;
  }

  return (
    <section className={cn(s.SliderSector, className)}>
      <Slider.SideBar className={cn(s.arrow, s.leftArrow)} side="left" />
      <div className={cn(s.inner)}>
        <Slider.Wrapper swipe className={cn(s.slider)}>
          {children}
        </Slider.Wrapper>
      </div>
      <Slider.SideBar className={cn(s.arrow, s.rightArrow)} side="right" />
    </section>
  );
}

SliderSector.defaultProps = {
  className: '',
};

interface ISliderSectorProps {
  className?: string;
  children: any;
}

//Оборачиваем в контекст слайдер
export default withSliderWrapperManager(SliderSector);
