/**
 * Created by westp on 04.04.2022
 */

import React, { useContext } from 'react';
import s from './SideBar.module.scss';
import cn from 'classnames';
import { SliderWrapperManagerContext } from 'components/SliderWrapper/contexts/SliderWrapperManager/SliderWrapperManager';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
      {side === 'left' ? (
        <ArrowBackIosNewIcon className={cn(s.arrow)} />
      ) : (
        <ArrowForwardIosIcon className={cn(s.arrow)} />
      )}
      {/*<ArrowButton className={cn(s.arrow, s.leftArrow)} side={side} />*/}
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
