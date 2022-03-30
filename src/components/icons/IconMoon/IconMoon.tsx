/**
 * Created by westp on 28.03.2022
 */

import React from 'react';
import s from './IconMoon.module.scss';
import cn from 'classnames';
import { IIcon } from '../../../interfaces';

export default function IconMoon({ className, icon }: IIconMoonProps) {
  if (!icon || !icon.className || icon.type !== 'icon-moon') return null;
  return <span className={cn(s.IconMoon, icon.className, className)} />;
}

IconMoon.defaultProps = {
  className: '',
};

interface IIconMoonProps {
  className?: string;
  icon: IIcon;
}
