/**
 * Created by westp on 14.07.2022
 */

import React from 'react';
import s from './DotsLoaderAlt.module.scss';
import cn from 'classnames';

export default function DotsLoaderAlt({ className }: IDotsLoaderAltProps) {
  return (
    <svg
      className={cn(s.DotsLoaderAlt, className)}
      viewBox="0 0 132 58"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g className={s.dots} fill="currentColor">
          <circle cx="25" cy="30" r="13"></circle>
          <circle cx="65" cy="30" r="13"></circle>
          <circle cx="105" cy="30" r="13"></circle>
        </g>
      </g>
    </svg>
  );
}

DotsLoaderAlt.defaultProps = {
  className: '',
};

interface IDotsLoaderAltProps {
  className?: string;
}
