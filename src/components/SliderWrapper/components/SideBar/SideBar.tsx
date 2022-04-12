/**
 * Created by westp on 04.04.2022
 */

import React, { useContext } from 'react';
import s from './SideBar.module.scss';
import cn from 'classnames';
import ArrowButton from 'components/UI/buttons/ArrowButton';
import { SliderWrapperManagerContext } from 'components/SliderWrapper/contexts/SliderWrapperManager/SliderWrapperManager';
import { Button } from '@mui/material';

export default function SideBar({ className, onClick, side }: ISideBarProps) {
  const { prev, next, currentSlideIndex, count } = useContext(SliderWrapperManagerContext);
  const onClickHandler = onClick ?? side === 'left' ? prev : next;
  const leftDisabled = side === 'left' && currentSlideIndex <= 1;
  const rightDisabled = side === 'right' && currentSlideIndex >= count && count > 0;
  return (
    <Button
      disabled={leftDisabled || rightDisabled}
      className={cn(
        s.SideBar,
        { [s.left]: side === 'left', [s.right]: side === 'right' },
        {
          [s.hidden]: leftDisabled || rightDisabled,
        },
        className
      )}
      onClick={onClickHandler}
    >
      <ArrowButton className={cn(s.arrow, s.leftArrow)} side={side} />
    </Button>
  );
}

SideBar.defaultProps = {
  className: '',
  side: 'left',
};

interface ISideBarProps {
  className?: string;
  side?: 'left' | 'right';
  onClick?(): any;
}
