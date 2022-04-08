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
          new _wave.current.animations.Shine({
            lineWidth: 3,
            lineColor: 'white',
            count: 120,
            diameter: 250,
            frequencyBand: 'mids',
            rounded: true,
          })
        );
      }
    }
  }, [audioID, canvasID, isNotEmpty]);

  return _wave.current;
}
