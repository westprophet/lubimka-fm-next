/**
 * Created by westp on 28.03.2022
 */

import React from 'react';
import s from './ToTopSection.module.scss';
import cn from 'classnames';
import CustomVerticalProgress from './components/CustomVerticalProgress';
import useScrollPercentage from './hooks/useScrollPercentage';
import { Button } from '@mui/material';
import animateScrollTo from 'animated-scroll-to';

export default function ToTopSection({ className }: IToTopSectionProps) {
  const scrollPercent = useScrollPercentage();
  const onToTopHandler = () => {
    // eslint-disable-next-line promise/catch-or-return
    animateScrollTo(0).then(() => {
      if (window) {
        const event = new WheelEvent('wheel', {
          deltaY: 120,
        });
        window.dispatchEvent(event);
      }
    });
  };
  return (
    <div className={cn(s.ToTopSection, className)}>
      <Button onClick={onToTopHandler} className={cn(s.button)} variant="text" size="small">
        <span className={cn(s.label)}>Наверх</span>
      </Button>
      <CustomVerticalProgress p={scrollPercent} className={cn(s.line)} />
    </div>
  );
}

ToTopSection.defaultProps = {
  className: '',
};

interface IToTopSectionProps {
  className?: string;
}
