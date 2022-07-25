/**
 * Created by westp on 28.03.2022
 */

import React from 'react';
import s from './SocialsSection.module.scss';
import cn from 'classnames';
import DEFAULT_SOCIALS from '../../../../../../constants/DEFAULT_SOCIALS';
import { ISocial } from '../../../../../../interfaces';
import SocialIcon from 'components/others/SocialIcon';

export default function SocialsSection({ className }: ISocialsSectionProps) {
  return (
    <div className={cn(s.SocialsSection, className)}>
      <div className={cn(s.inner)}>
        {DEFAULT_SOCIALS.map((soc: ISocial) => (
          <SocialIcon key={soc.key ?? soc.title} social={soc} className={cn(s.socialItem)} />
        ))}
      </div>
      <div className={cn(s.labelContainer)}>
        <div className={cn(s.line)} />
        <span className={cn(s.label)}>Приложение</span>
      </div>
    </div>
  );
}

SocialsSection.defaultProps = {
  className: '',
};

interface ISocialsSectionProps {
  className?: string;
}
