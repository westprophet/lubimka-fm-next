/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './SectionSliderWrapper.module.scss';
import cn from 'classnames';
import SectionWrapper from '../SectionWrapper';
import Slider, { withSliderWrapperManager } from '../../../../components/SliderWrapper';
import Link from 'next/link';

function SectionSliderWrapper({ className, title, children, link }: ISectionSliderWrapperProps) {
  if (!children) {
    console.warn('SectionSliderWrapper: slide none', title);
    return null;
  }
  return (
    <SectionWrapper.Wrapper className={cn(s.SectionSliderWrapper, className)}>
      {title && (
        <SectionWrapper.Title className={cn(s.title)}>
          {link ? (
            <Link href={link}>
              <a>{title}</a>
            </Link>
          ) : (
            title
          )}
        </SectionWrapper.Title>
      )}
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
  link?: string;
}
export default withSliderWrapperManager(SectionSliderWrapper);
