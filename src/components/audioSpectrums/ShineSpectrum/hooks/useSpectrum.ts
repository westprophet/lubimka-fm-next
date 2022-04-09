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
          new _wave.current.animations.Lines({
            lineWidth: 1,
            lineColor: '#111',
            count: 50,
            // top: true,
            // left: true,
            // right: true,
            center: true,
            mirroredY: true,
            frequencyBand: 'lows',
            // rounded: true,
          })
        );
        _wave.current.addAnimation(
          new _wave.current.animations.Lines({
            lineWidth: 1,
            lineColor: '#222',
            count: 50,
            // top: true,
            // left: true,
            // right: true,
            center: true,
            mirroredY: true,
            frequencyBand: 'mids',
            // rounded: true,
          })
        );
        _wave.current.addAnimation(
          new _wave.current.animations.Lines({
            lineWidth: 1,
            lineColor: '#333',
            count: 50,
            // top: true,
            // left: true,
            // right: true,
            center: true,
            mirroredY: true,
            frequencyBand: 'highs',
            // rounded: true,
          })
        );
      }
    }
  }, [audioID, canvasID, isNotEmpty]);

  return _wave.current;
}
