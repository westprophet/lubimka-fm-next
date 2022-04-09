/**
 * Created by westp on 23.03.2022
 */

import React, { useContext } from 'react';
import s from './ShineBannerSpectrum.module.scss';
import cn from 'classnames';
import { RadioPlayerContext } from '../../../../../../contexts/RadioPlayerManager';
import useSpectrum from 'components/audioSpectrums/ShineSpectrum/hooks/useSpectrum';

export default function ShineBannerSpectrum({ className }: IShineBannerSpectrumProps) {
  const { id } = useContext(RadioPlayerContext);
  const wave = useSpectrum(id, 'banner-spectrum-id');
  return (
    <div className={cn(s.ShineBannerSpectrum, className)}>
      <canvas width={1200} height={400} id={'banner-spectrum-id'} />
    </div>
  );
}

ShineBannerSpectrum.defaultProps = {
  className: '',
};

interface IShineBannerSpectrumProps {
  className?: string;
}
