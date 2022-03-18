import { createRef, useCallback, useState } from 'react';
import IChannel from 'src/interfaces/IChannel';
import { useSnackbar } from 'notistack';
import { TAudioManagerStatus } from '../../../types/TAudioManagerStatus';
import useCreateDataStream from './useCreateDataStream';

let play, load, onCanPlay, stop, onError;
export default function useInitialAudioMethods(channel: IChannel) {
  const [status, setStatus] = useState<TAudioManagerStatus>('paused'); // Статус плеера
  const audioRef = createRef<HTMLMediaElement>(); //Тег плеера
  const { enqueueSnackbar } = useSnackbar();
  const { data, startStream, stopStream } = useCreateDataStream(channel);

  //Подгружаем трек
  load = useCallback(() => {
    setStatus('loading');
    audioRef.current?.load();
    startStream();
  }, [setStatus, audioRef]);

  //Играть
  play = useCallback(() => {
    if (status === 'paused' && audioRef.current.paused) load();
  }, [audioRef, status]);

  //Стоп
  stop = useCallback(() => {
    setStatus('paused');
    audioRef.current?.pause();
    stopStream();
  }, [setStatus, audioRef]);

  //Как только трек будет загружен
  onCanPlay = useCallback(() => {
    audioRef.current?.play().finally(() => setStatus('played'));
  }, [setStatus, audioRef]);

  //При ошибках загрузки
  onError = useCallback(() => {
    setStatus('error');
    stopStream();
    enqueueSnackbar(`Something then wrong`, {
      variant: 'error',
      autoHideDuration: 5000,
    });
  }, [setStatus, enqueueSnackbar]);

  return {
    audioRef,
    play,
    stop,
    status,
    onCanPlay,
    onError,
    // data: data ? data.mounts[0] : null, //Отдаем данние которие будут использоваться в приложении
    data,
  };
}
