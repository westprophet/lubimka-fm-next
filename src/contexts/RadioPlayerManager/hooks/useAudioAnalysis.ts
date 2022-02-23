import { MutableRefObject, useEffect } from 'react';
import useAudioContext from 'src/hooks/useAudioContext';

export default function useAudioAnalysis(
  audioTegRef: MutableRefObject<HTMLMediaElement>
): useAudioContextReturn {
  const { ACTX } = useAudioContext(); //Получаем контекст
  let source: MediaElementAudioSourceNode | null = null;
  let analyser: AnalyserNode | null = null;

  useEffect(() => {
    if (ACTX) {
      initial();
      return () => {
        disconnect();
      };
    }
  }, [ACTX]);

  const initial = () => {
    if (ACTX) {
      source = ACTX.createMediaElementSource(audioTegRef.current); //Создаем элемент
      analyser = ACTX.createAnalyser(); //Создаем обьект анализатора
      connect();
    }
  };
  const connect = (): boolean => {
    if (!source) return false;
    try {
      source.connect(ACTX.destination);
      source.connect(analyser); //Подключаем анализатор
    } catch (e) {
      console.error('Source not connect', e, audioTegRef);
      return false;
    }
  };

  const disconnect = (): boolean => {
    if (!source) return false;
    try {
      source.disconnect(ACTX.destination);
      source.disconnect(analyser); //Подключаем анализатор
      return true;
    } catch (e) {
      console.error('Source not disconnect', e, audioTegRef);
      return false;
    }
  };

  // if (!ACTX) return null;
  return { analyser, connect, disconnect };
}

export interface useAudioContextReturn {
  analyser: AnalyserNode;
  connect(): boolean;
  disconnect(): boolean;
}
