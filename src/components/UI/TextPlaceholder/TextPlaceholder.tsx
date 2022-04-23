/**
 * Created by westp on 23.04.2022
 */

import React from 'react';
import s from './TextPlaceholder.module.scss';
import cn from 'classnames';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function TextPlaceholder({
  className,
  children,
  placeholder,
  side,
  arrow,
  animation,
  onClick,
}: ITextPlaceholderProps) {
  const _arrow = arrow ? (
    side === 'left' && arrow ? (
      <ArrowBackIosNewIcon />
    ) : (
      <ArrowForwardIosIcon />
    )
  ) : null;

  return (
    <div className={cn(s.TextPlaceholder, className)}>
      <div
        className={cn(
          s.inner,
          { [s.arrow]: arrow },
          { [s.animation]: animation },
          { [s.right]: side === 'right', [s.left]: side === 'left' }
        )}
        onClick={onClick}
      >
        <div>
          {side === 'left' && _arrow}
          <span>{children}</span>
          {side === 'right' && _arrow}
        </div>
        <div>
          {side === 'left' && _arrow}
          <span>{placeholder}</span>
          {side === 'right' && _arrow}
        </div>
      </div>
    </div>
  );
}

TextPlaceholder.defaultProps = {
  className: '',
  side: 'right',
  arrow: false,
  animation: true,
  onClick: () => {},
};

interface ITextPlaceholderProps {
  className?: string;
  children: any;
  placeholder: string;
  side?: 'left' | 'right';
  arrow?: boolean;
  animation?: boolean;
  onClick?(): any;
}
