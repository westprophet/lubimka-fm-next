/**
 * Created by westp on 23.03.2022
 */

import React, { useContext } from 'react';
import s from './ShineBannerSpectrum.module.scss';
import cn from 'classnames';
import ShineSpectrum from 'components/audioSpectrums/ShineSpectrum';
import { RadioPlayerContext } from '../../../../../../contexts/RadioPlayerManager';

export default function ShineBannerSpectrum({ className }: IShineBannerSpectrumProps) {
  const { id } = useContext(RadioPlayerContext);
  return (
    <div className={cn(s.ShineBannerSpectrum, className)}>
      <ShineSpectrum audioID={id} id="banner-radio-spectrum" />
    </div>
  );
}

ShineBannerSpectrum.defaultProps = {
  className: '',
};

interface IShineBannerSpectrumProps {
  className?: string;
}
