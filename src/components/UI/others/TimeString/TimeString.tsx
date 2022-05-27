/**
 * Created by westp on 27.05.2022
 */

import React from 'react';
import s from './TimeString.module.scss';
import cn from 'classnames';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// @ts-ignore
import Marquee from 'react-double-marquee';

//Простой визуальный элемент
//Строка времени вместе с иконкой.
export default function TimeString({ className, time }: ITimeStringProps) {
  return (
    <div className={cn(s.TimeString, className)}>
      <AccessTimeIcon />
      <span>
        <Marquee speed={0.02} direction="left" scrollWhen={'overflow'} delay={3000}>
          {time}
        </Marquee>
      </span>
    </div>
  );
}

TimeString.defaultProps = {
  className: '',
};

interface ITimeStringProps {
  className?: string;
  time: string;
}
