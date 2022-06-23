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
  inline,
  delay,
}: IIconStringProps) {
  return (
    <div className={cn(s.IconString, className)}>
      {icon}

      {inline ? (
        <span>
          <Marquee speed={0.02} direction={direction} scrollWhen={'overflow'} delay={delay}>
            {children}
          </Marquee>
        </span>
      ) : (
        <span>{children}</span>
      )}
    </div>
  );
}

IconString.defaultProps = {
  className: '',
  direction: 'left',
  delay: 100,
  speed: 0.02,
  inline: true,
};

interface IIconStringProps {
  className?: string;
  inline: boolean;
  icon: any;
  children: any;
  direction?: 'left' | 'right';
  delay?: number;
  speed?: number;
}
