import { MutableRefObject } from 'react';

export default interface IPlayerManagerValues {
  // status: 'playing' | 'paused' | 'stopped' | 'loading';
  loading: boolean;
  audioRef: MutableRefObject<HTMLAudioElement> | null;
}
