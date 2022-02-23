/**
 * Created by westp on 21.02.2022
 */

import React from 'react';
import s from './AudioSpectrum.module.scss';
import cn from 'classnames';

export default function AudioSpectrum({ className, analyser }: IAudioSpectrumProps) {
  return (
    <div className={cn(s.AudioSpectrum, className)}>
      {/*<canvas id={this.canvasId} width={this.props.width} height={this.props.height}/>*/}
    </div>
  );
}

AudioSpectrum.defaultProps = {
  className: '',
};

interface IAudioSpectrumProps {
  className?: string;
  analyser: AnalyserNode;
}
