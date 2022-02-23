import { createRef, useEffect, useState } from 'react';
import IChannel from 'src/interfaces/IChannel';
// import useFetchStream from './useFetchStream';

let play, pause, load;
export default function useInitialAudioMethods(channel: IChannel) {
  const [loading, setLoad] = useState<boolean>(false);
  const audioRef = createRef<HTMLMediaElement>(); //Тег плеера
  // const fetchStream = useFetchStream(channel);

  const Play = (at: HTMLMediaElement) => {
    console.log('play');
    at.play()
      .then(() => {
        console.log('play');
        setLoad(true);
      })
      .catch(() => setLoad(false));
  };

  const Pause = (at: HTMLMediaElement) => {
    at.pause();
  };

  const Load = (at: HTMLMediaElement) => {
    at.load();
  };

  useEffect(() => {
    if (audioRef.current) {
      load = () => Load(audioRef.current);
      pause = () => Pause(audioRef.current);
      play = () => Play(audioRef.current);
    }
  }, [audioRef]);

  return {
    audioRef,
    play,
    pause,
    load,
    loading,
  };
}
