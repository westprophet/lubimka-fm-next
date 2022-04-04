/**
 * Created by westp on 28.03.2022
 */

import React from 'react';

import ISocial from '../../../interfaces/others/ISocial';
import { IIcon } from '../../../interfaces';
import IconMaterial from 'components/icons/IconMaterial';
import cn from 'classnames';
import s from './SocialIcon.module.scss';
import IconMoon from 'components/icons/IconMoon';

export default function SocialIcon({ className, social }: ISocialMaterialIconProps) {
  const Icon: IIcon = social.icon;
  if (!Icon) return null;
  const _className: string = cn(s.SocialIcon, className);
  let _icon = null;
  switch (Icon.type) {
    case 'icon-moon':
      _icon = <IconMoon icon={Icon} />;
      break;
    case 'material':
      _icon = <IconMaterial icon={Icon} />;
      break;
    default:
      return null;
  }
  return (
    <a target="_blank" href={social.url} rel="noreferrer" className={_className}>
      {_icon}
    </a>
  );
}

SocialIcon.defaultProps = {
  className: '',
};

interface ISocialMaterialIconProps {
  className?: string;
  social: ISocial;
}
