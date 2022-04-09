/**
 * Created by westp on 09.04.2022
 */

import React, { useContext } from 'react';
import s from './ButtonSpectrum.module.scss';
import cn from 'classnames';
import useSpectrum from './hooks/useSpectrum';
import { RadioPlayerContext } from '../../../../../../contexts/RadioPlayerManager';

export default function ButtonSpectrum({ className }: IButtonSpectrumProps) {
  const { id } = useContext(RadioPlayerContext);
  const wave = useSpectrum(id, 'button-banner-spectrum-id');
  return (
    <div className={cn(s.ButtonSpectrum, className)}>
      <canvas width={180} height={180} id={'button-banner-spectrum-id'} />
    </div>
  );
}

ButtonSpectrum.defaultProps = {
  className: '',
};

interface IButtonSpectrumProps {
  className?: string;
}
