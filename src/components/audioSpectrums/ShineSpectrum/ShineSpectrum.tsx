/**
 * Created by westp on 21.02.2022
 */

import React from 'react';
import s from './ShineSpectrum.module.scss';
import cn from 'classnames';
import useSpectrum from './hooks/useSpectrum';

export default function ShineSpectrum({ audioID, id, className }: IAudioSpectrumProps) {
  const wave = useSpectrum(audioID, id);
  return (
    <div className={cn(s.AudioSpectrum, className)}>
      <canvas width={800} height={800} id={id} />
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
  audioID: string;
  id: string;
  // canvasRef: RefObject<HTMLCanvasElement>;
}
