/**
 * Created by westp on 17.03.2022
 */

import React from 'react';
import s from './CommonPlayerTitle.module.scss';
import cn from 'classnames';
import TAudioTitle from '../../../../../types/TAudioTitle';

export default function CommonPlayerTitle({ className, ft }: ICommonPlayerTitleProps) {
  const played = !!ft;

  const inner = !played ? (
    <div className={cn(s.oneLine)}>Нажмите play для начала воспроизведения</div>
  ) : (
    <div className={cn(s.twoLine)}>
      <div>{ft.artist}</div>
      <div>{ft.title}</div>
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
