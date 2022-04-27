/**
 * Created by westp on 17.03.2022
 */

import React from 'react';
import s from './CommonPlayerTitle.module.scss';
import cn from 'classnames';
import TAudioTitle from '../../../../../types/TAudioTitle';
// @ts-ignore
import Marquee from 'react-double-marquee';

export default function CommonPlayerTitle({ className, ft }: ICommonPlayerTitleProps) {
  const played = !!ft;
  const title = 'Нажмите play для начала воспроизведения';

  const inner = !played ? (
    <div className={cn(s.oneLine)}>
      <Marquee childMargin={20}>{title}</Marquee>
    </div>
  ) : (
    <div className={cn(s.twoLine)}>
      <div className={cn(s.artist)}>{ft.artist}</div>
      <div className={cn(s.title)}>{ft.title}</div>
    </div>
  );
  return <div className={cn(s.CommonPlayerTitle, className)}>{inner}</div>;
}

CommonPlayerTitle.defaultProps = {
  className: '',
};

interface ICommonPlayerTitleProps {
  className?: string;
  ft: TAudioTitle | null;
}
