/**
 * Created by westp on 21.02.2022
 */

import React from 'react';
import s from './ShineSpectrum.module.scss';
import cn from 'classnames';
import useSpectrum from './hooks/useSpectrum';

export default function ShineSpectrum({ audioTagID, id, className }: IAudioSpectrumProps) {
  const options = { type: 'shine' };
  const wave = useSpectrum(audioTagID, id, options);
  return (
    <div className={cn(s.AudioSpectrum, className)}>
      <canvas width={300} height={300} id={id} />
    </div>
  );
}

ShineSpectrum.defaultProps = {
  className: '',
  canvasID: '',
  // canvasID: createRandomID(10),
};

interface IAudioSpectrumProps {
  className?: string;
  audioTagID: string;
  id: string;
}
