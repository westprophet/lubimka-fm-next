/**
 * Created by westp on 08.06.2022
 */

import React from 'react';
import s from './HiddenAsideTitle.module.scss';
import cn from 'classnames';

//Заголовок для выдвижного меню
export default function HiddenAsideTitle({
  className,
  children,
  onClick,
  isShowArrow,
}: IHiddenAsideTitleProps) {
  return (
    <div onClick={onClick} className={cn(s.HiddenAsideTitle, className)}>
      <span className={cn({ ['link-arrow left-arrow']: isShowArrow })}>{children}</span>
    </div>
  );
}

HiddenAsideTitle.defaultProps = {
  className: '',
  isShowArrow: true,
};

interface IHiddenAsideTitleProps {
  className?: string;
  children: any;
  isShowArrow?: boolean;
  onClick?(): any;
}
