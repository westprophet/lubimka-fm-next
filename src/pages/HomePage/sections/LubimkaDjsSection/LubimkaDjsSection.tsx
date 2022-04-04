/**
 * Created by westp on 31.03.2022
 */

import React from 'react';
import s from './LubimkaDjsSection.module.scss';
import cn from 'classnames';
import AuthorComponent from 'components/UI/AuthorComponent';
import Slider from '../../../../components/SliderWrapper';
import SectionSliderWrapper from '../../../../layouts/DefaultLayout/components/SectionSliderWrapper';

export default function LubimkaDjsSection() {
  return (
    <SectionSliderWrapper className={cn(s.LubimkaDjsSection)} title="Любимка DJ’s">
      <Slider.Slide>
        <AuthorComponent />
      </Slider.Slide>
      <Slider.Slide>
        <AuthorComponent />
      </Slider.Slide>
      <Slider.Slide>
        <AuthorComponent />
      </Slider.Slide>
      <Slider.Slide>
        <AuthorComponent />
      </Slider.Slide>
      <Slider.Slide>
        <AuthorComponent />
      </Slider.Slide>
      <Slider.Slide>
        <AuthorComponent />
      </Slider.Slide>
      <Slider.Slide>
        <AuthorComponent />
      </Slider.Slide>
    </SectionSliderWrapper>

    // <SectionWrapper.Wrapper >
    //   {/*<Slider.SideBar side="left" onClick={() => {}} />*/}
    //   {/*<ArrowButton className={cn(s.arrow, s.leftArrow)} onClick={() => {}} side="left" />*/}
    //   <SectionWrapper.Inner>
    //     <SectionWrapper.Title>Любимка DJ’s</SectionWrapper.Title>
    //     <Slider.Wrapper swipe className={cn(s.slider)}>
    //       <Slider.Slide>
    //         <AuthorComponent />
    //       </Slider.Slide>
    //       <Slider.Slide>
    //         <AuthorComponent />
    //       </Slider.Slide>
    //       <Slider.Slide>
    //         <AuthorComponent />
    //       </Slider.Slide>
    //       <Slider.Slide>
    //         <AuthorComponent />
    //       </Slider.Slide>
    //       <Slider.Slide>
    //         <AuthorComponent />
    //       </Slider.Slide>
    //       <Slider.Slide>
    //         <AuthorComponent />
    //       </Slider.Slide>
    //       <Slider.Slide>
    //         <AuthorComponent />
    //       </Slider.Slide>
    //     </Slider.Wrapper>
    //   </SectionWrapper.Inner>
    //   {/*<ArrowButton onClick={() => {}} side="right" />*/}
    // </SectionWrapper.Wrapper>
  );
}
