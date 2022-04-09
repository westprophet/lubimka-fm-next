import { createRef, useCallback, useEffect, useState } from 'react';
import IChannel from 'src/interfaces/IChannel';
import { useSnackbar } from 'notistack';
import { TAudioManagerStatus } from '../../../types/TAudioManagerStatus';
import useCreateDataStream from './useCreateDataStream';

let play, load, onCanPlay, stop, onError, reload, toggle;
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
  }, [audioRef, startStream]);

  //Играть
  play = useCallback(() => {
    if (status === 'paused' && audioRef.current.paused) load();
  }, [audioRef, status]);

  //Стоп
  stop = useCallback(() => {
    setStatus('paused');
    audioRef.current?.pause();
    stopStream();
  }, [audioRef, stopStream]);

  toggle = useCallback(() => {
    if (status == 'paused') play();
    else stop();
  }, [status]);

  //перезагрузить
  reload = useCallback(() => {
    audioRef.current?.pause();
    stopStream();
    load();
  }, [audioRef, stopStream]);

  //Как только трек будет загружен
  onCanPlay = useCallback(() => {
    if (audioRef.current) audioRef.current?.play().finally(() => setStatus('played'));
  }, [setStatus, audioRef, channel]);

  //При ошибках загрузки
  onError = useCallback(() => {
    setStatus('error');
    stopStream();
    enqueueSnackbar(`Something then wrong`, {
      variant: 'error',
      autoHideDuration: 5000,
    });
  }, [setStatus, enqueueSnackbar]);

  useEffect(() => {
    if (audioRef.current) {
      // @ts-ignore
      audioRef.current.value = 0.2;
    }
  }, []);
  //Если играет радио и переключили канал то перезагрузить радио
  useEffect(() => {
    if (status === 'played' && channel) reload();
  }, [channel]);
  return {
    audioRef,
    play,
    stop,
    status,
    onCanPlay,
    onError,
    reload,
    toggle,
    // data: data ? data.mounts[0] : null, //Отдаем данние которие будут использоваться в приложении
    data,
  };
}
