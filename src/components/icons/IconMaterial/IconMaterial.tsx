/**
 * Created by westp on 28.03.2022
 */

import React from 'react';
import s from './IconMaterial.module.scss';
import cn from 'classnames';
import Icon from '@mui/material/Icon';
import { IIcon } from '../../../interfaces';
export default function IconMaterial({ className, icon }: IIconMaterialProps) {
  if (!icon || icon.type !== 'material') return null;
  return <Icon className={cn(s.IconMaterial, className)}>{icon.className}</Icon>;
}

IconMaterial.defaultProps = {
  className: '',
};

interface IIconMaterialProps {
  className?: string;
  icon: IIcon;
}
