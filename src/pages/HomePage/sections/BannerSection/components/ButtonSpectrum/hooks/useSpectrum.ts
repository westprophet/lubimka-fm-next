import { useEffect, useRef } from 'react';
import { Wave } from '@foobar404/wave';

export default function useSpectrum(audioID: string, canvasID: string) {
  const _wave = useRef<Wave>();
  const isNotEmpty = audioID && canvasID;

  useEffect(() => {
    if (isNotEmpty && document) {
      const audioElement: HTMLMediaElement = document.querySelector(`#${audioID}`);
      const canvasElement: HTMLCanvasElement = document.querySelector(`#${canvasID}`);
      if (canvasElement && audioElement) {
        _wave.current = new Wave(audioElement, canvasElement);
        _wave.current.addAnimation(
          new _wave.current.animations.Circles({
            lineWidth: 4,
            lineColor: 'rgba(255, 255, 255, 0.1)',
            count: 3,
            diameter: 1,
            frequencyBand: 'lows',
          })
        );
      }
    }
  }, [audioID, canvasID, isNotEmpty]);

  return _wave.current;
}
