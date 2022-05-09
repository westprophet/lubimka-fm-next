/**
 * Created by westp on 04.04.2022
 */

import React, { forwardRef, LegacyRef } from 'react';
import s from './Slide.module.scss';
import cn from 'classnames';

//Стандартная анимация для появления слайда
export const animationVariants = {
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
    },
  }),
  hidden: {
    opacity: 0,
    y: '100%',
  },
};

export const Slide = forwardRef(
  ({ className, children }: ISlideProps, ref: LegacyRef<HTMLDivElement> | undefined) => {
    return (
      <div ref={ref} className={cn(s.Slide, className)}>
        {children}
      </div>
    );
  }
);

Slide.defaultProps = {
  className: '',
};

interface ISlideProps {
  className?: string;
  children: any;
}
export default Slide;
