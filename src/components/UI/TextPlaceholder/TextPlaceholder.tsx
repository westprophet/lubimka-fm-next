/**
 * Created by westp on 23.04.2022
 */

import React, { forwardRef } from 'react';
import s from './TextPlaceholder.module.scss';
import cn from 'classnames';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// eslint-disable-next-line react/display-name
const TextPlaceholder = forwardRef(
  (
    {
      className,
      children,
      placeholder,
      side,
      arrow,
      onClick,
      isEnable,
      placeholderArrow,
    }: ITextPlaceholderProps,
    ref: React.LegacyRef<HTMLDivElement> | undefined
  ) => {
    const _arrow = side === 'left' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />;
    if (isEnable)
      return (
        <div className={cn(s.TextPlaceholder, className)}>
          <div
            className={cn(
              s.inner,
              s.animation,
              { [s.arrow]: arrow },
              { [s.right]: side === 'right', [s.left]: side === 'left' }
            )}
            ref={ref}
            onClick={onClick}
          >
            <div>
              {side === 'left' && arrow && _arrow}
              <span>{children}</span>
              {side === 'right' && arrow && _arrow}
            </div>
            <div>
              {side === 'left' && placeholderArrow && _arrow}
              <span>{placeholder}</span>
              {side === 'right' && placeholderArrow && _arrow}
            </div>
          </div>
        </div>
      );
    else return children;
  }
);

TextPlaceholder.defaultProps = {
  className: '',
  side: 'right',
  // arrow: false,
  isEnable: true,
  onClick: () => {},
};

interface ITextPlaceholderProps {
  className?: string;
  children: any;
  placeholder: string;
  side?: 'left' | 'right';
  arrow?: boolean;
  isEnable?: boolean;
  placeholderArrow?: boolean;
  onClick?(): any;
}

export default TextPlaceholder;
