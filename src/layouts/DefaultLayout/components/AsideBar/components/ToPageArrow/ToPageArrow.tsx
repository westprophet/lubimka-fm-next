/**
 * Created by westp on 11.04.2022
 */

import React from 'react';
import s from './ToPageArrow.module.scss';
import cn from 'classnames';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';

export default function ToPageArrow({ className, onClick, show, type, link }: IToBackArrowProps) {
  const r = useRouter();
  return (
    <div
      className={cn(
        s.ToPageArrow,
        {
          [s.left]: type === 'left',
          [s.right]: type === 'right',
        },
        { [s.show]: show },
        className
      )}
    >
      <IconButton
        onClick={() => {
          if (link) r.push(link);
          else if (onClick) onClick();
        }}
      >
        {type === 'left' ? (
          <KeyboardArrowLeftIcon fontSize="large" />
        ) : (
          <KeyboardArrowRightIcon fontSize="large" />
        )}
      </IconButton>
    </div>
  );
}

ToPageArrow.defaultProps = {
  className: '',
  type: 'left',
};

interface IToBackArrowProps {
  className?: string;
  onClick?(): any;
  link?: string;
  show?: boolean;
  type?: 'left' | 'right';
}
