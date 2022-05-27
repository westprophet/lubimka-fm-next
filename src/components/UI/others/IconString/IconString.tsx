/**
 * Created by westp on 27.05.2022
 */

import React from 'react';
import s from './IconString.module.scss';
import cn from 'classnames';

// @ts-ignore
import Marquee from 'react-double-marquee';
export default function IconString({
  className,
  icon,
  children,
  direction,
  delay,
}: IIconStringProps) {
  return (
    <div className={cn(s.IconString, className)}>
      {icon}
      <span>
        <Marquee speed={0.02} direction={direction} scrollWhen={'overflow'} delay={delay}>
          {children}
        </Marquee>
      </span>
    </div>
  );
}

IconString.defaultProps = {
  className: '',
  direction: 'left',
  delay: 3000,
  speed: 0.02,
};

interface IIconStringProps {
  className?: string;
  icon: any;
  children: any;
  direction?: 'left' | 'right';
  delay?: number;
  speed?: number;
}
