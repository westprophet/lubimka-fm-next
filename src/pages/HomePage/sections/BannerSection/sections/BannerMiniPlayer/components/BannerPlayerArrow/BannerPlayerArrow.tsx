/**
 * Created by westprophet on 07.04.2022
 */

import React from 'react';
import s from './BannerPlayerArrow.module.scss';
import cn from 'classnames';
import ArrowButton from 'components/UI/buttons/ArrowButton';
import { IArrowButtonProps } from 'components/UI/buttons/ArrowButton/ArrowButton';
import { TAudioManagerStatus } from '../../../../../../../../types/TAudioManagerStatus';

export default function BannerPlayerArrow({
  className,
  onClick,
  status,
  side,
}: IBannerPlayerArrowProps) {
  return (
    <ArrowButton
      // disabled={status === 'loading'}
      className={cn(
        s.BannerPlayerArrow,
        { [s.right]: side === 'right', [s.left]: side === 'left' },
        className
      )}
      side={side}
      onClick={() => {
        if (status !== 'loading' && onClick) onClick();
      }}
    />
  );
}

BannerPlayerArrow.defaultProps = {
  className: '',
};

interface IBannerPlayerArrowProps extends IArrowButtonProps {
  status: TAudioManagerStatus;
}
