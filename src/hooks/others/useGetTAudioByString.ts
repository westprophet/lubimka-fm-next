import getTAudioTitleByString from '../../tools/ITrack/getTAudioTitleByString';
import { useMemo } from 'react';

//Получаем из названия трека - автора и заголовок трека
export default function useGetTAudioByString(name: string) {
  return useMemo(() => getTAudioTitleByString(name), [name]);
}
