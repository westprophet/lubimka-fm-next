/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './SectionSliderWrapper.module.scss';
import cn from 'classnames';
import SectionWrapper from '../SectionWrapper';
import Slider, { withSliderWrapperManager } from '../../../../components/SliderWrapper';

//Обертка для секции со слайдером
function SectionSliderWrapper({
  className,
  title,
  children,
  link,
  placeholder,
}: ISectionSliderWrapperProps) {
  if (!children) {
    console.warn('SectionSliderWrapper: slide none', title);
    return null;
  }
  return (
    <SectionWrapper.Wrapper className={cn(s.SectionSliderWrapper, className)}>
      <div className={cn(s.head)}>
        {title && (
          <SectionWrapper.Title className={cn(s.title)} placeholder={placeholder} link={link}>
            {title}
          </SectionWrapper.Title>
        )}
      </div>
      <SectionWrapper.Inner className={cn(s.inner)}>
        <Slider.SideBar className={cn(s.arrow, s.leftArrow)} side="left" />
        <Slider.Wrapper swipe className={cn(s.slider)}>
          {children}
        </Slider.Wrapper>
        <Slider.SideBar className={cn(s.arrow, s.rightArrow)} side="right" />
      </SectionWrapper.Inner>
    </SectionWrapper.Wrapper>
  );
}

SectionSliderWrapper.defaultProps = {
  className: '',
  placeholder: 'Подробнее',
};

interface ISectionSliderWrapperProps {
  className?: string;
  title?: string;
  children?: any;
  link?: string;
  placeholder?: string;
}
export default withSliderWrapperManager(SectionSliderWrapper);
