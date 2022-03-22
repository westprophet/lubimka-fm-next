/**
 * Created by westp on 21.03.2022
 */

import React, { MutableRefObject } from 'react';
import s from './SlickControlArrow.module.scss';
import cn from 'classnames';
import ControlArrows from 'components/UI/ControlArrows';

export default function SlickControlArrow({
  className,
  slider,
  current,
  length,
}: ISlickControlArrowProps) {
  const prevUnlock = current > 0;
  const nextUnlock = current <= length;
  return (
    <ControlArrows
      className={cn(s.SlickControlArrow, className)}
      onClickLeft={() => {
        if (slider.current && prevUnlock) slider.current?.slickPrev();
      }}
      onClickRight={() => {
        if (slider.current && nextUnlock) slider.current?.slickNext();
      }}
      classNameL={cn(s.leftButton, { [s.block]: current === 1 })}
      classNameR={cn(s.rightButton, { [s.block]: current === length })}
    />
  );
}

SlickControlArrow.defaultProps = {
  className: '',
};

interface ISlickControlArrowProps {
  className?: string;
  length: number;
  current: number;
  slider: MutableRefObject<any | undefined>;
}
