import { useMemo, useRef } from 'react';
import isFrontendEnvironment from '../../../utils/isFrontendEnvironment';
import { RADIO_PLAYER_ID } from '../constants';

//Получаем созданный аудио тег
export default function useAudio(
  src: string | null,
  onCanPlay: ((this: GlobalEventHandlers, ev: Event) => any) | null,
  onError: OnErrorEventHandler
) {
  const isF = isFrontendEnvironment();

  const _audio = useMemo<HTMLAudioElement | null>(() => {
    return isF ? new Audio(src ?? '') : null;
  }, []);

  const audio = useRef<HTMLAudioElement>(isF ? _audio : null); //Тег плеера
  if (audio.current) {
    audio.current.autoplay = false;
    audio.current.oncanplay = onCanPlay;
    audio.current.onerror = onError;
    audio.current.crossOrigin = 'anonymous';
    audio.current.id = RADIO_PLAYER_ID;
    audio.current.preload = 'none';
  }
  return audio;
}
