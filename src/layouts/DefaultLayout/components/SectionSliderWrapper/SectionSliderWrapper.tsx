/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './SectionSliderWrapper.module.scss';
import cn from 'classnames';
import SectionWrapper from '../SectionWrapper';
import Slider, { withSliderWrapperManager } from '../../../../components/SliderWrapper';
import { motion } from 'framer-motion';
import Link from 'next/link';

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

//Обертка для секции со слайдером
function SectionSliderWrapper({
  className,
  title,
  children,
  link,
  detail,
  id,
}: ISectionSliderWrapperProps) {
  if (!children) {
    console.warn('SectionSliderWrapper: slide none', title);
    return null;
  }
  return (
    <SectionWrapper.Wrapper className={cn(s.SectionSliderWrapper, className)} id={id}>
      <motion.div
        className={cn(s.head)}
        initial="hidden"
        variants={variants}
        whileInView="visible"
        viewport={{
          amount: 0.6,
          once: true,
        }}
      >
        {title && (
          <SectionWrapper.MTitle className={cn(s.title)} link={link}>
            {title}
          </SectionWrapper.MTitle>
        )}
        {detail && (
          <div className={cn(s.additional)}>
            <Link href={detail.link}>
              <a className={cn('link-arrow')}>{detail.title}</a>
            </Link>
          </div>
        )}
      </motion.div>
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
  id: string;
  detail: {
    title: string;
    link: string;
  };
}
export default withSliderWrapperManager(SectionSliderWrapper);
