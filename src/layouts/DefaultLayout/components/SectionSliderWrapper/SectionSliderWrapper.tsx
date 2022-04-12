/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './SectionSliderWrapper.module.scss';
import cn from 'classnames';
import SectionWrapper from '../SectionWrapper';
import Slider, { withSliderWrapperManager } from '../../../../components/SliderWrapper';

function SectionSliderWrapper({ className, title, children }: ISectionSliderWrapperProps) {
  return (
    <SectionWrapper.Wrapper className={cn(s.SectionSliderWrapper, className)}>
      {title && <SectionWrapper.Title className={cn(s.title)}>{title}</SectionWrapper.Title>}
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
};

interface ISectionSliderWrapperProps {
  className?: string;
  title?: string;
  children?: any;
}
export default withSliderWrapperManager(SectionSliderWrapper);
