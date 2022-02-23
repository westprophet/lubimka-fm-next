import { useEffect, useRef } from 'react';
import Wave from '@foobar404/wave';

export default function useSpectrum(audioTagID: string, canvasID: string, options) {
  const _wave = useRef();

  useEffect(() => {
    if (audioTagID && canvasID) _wave.current = new Wave();
  }, [audioTagID, canvasID]);

  useEffect(() => {
    if (_wave && audioTagID && canvasID) {
      // @ts-ignore
      _wave.current.fromElement(audioTagID, canvasID, options);
    }
  }, [_wave?.current]);
  return _wave.current;
}
