/**
 * Created by westp on 29.04.2022
 */

import React from 'react';
import s from './Slide.module.scss';
import cn from 'classnames';

export default function Slide({ className, children }: ISlideProps) {
  return <div className={cn(s.Slide, className)}>{children}</div>;
}

Slide.defaultProps = {
  className: '',
};

interface ISlideProps {
  className?: string;
  children: any;
}
