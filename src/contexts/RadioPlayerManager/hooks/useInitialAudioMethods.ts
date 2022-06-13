// @ts-ignore
import { startTransition, useCallback, useState } from 'react';
import IChannel from 'src/interfaces/IChannel';
import { useSnackbar } from 'notistack';
import { TAudioManagerStatus } from 'types/TAudioManagerStatus';
import useChannelStream from './useChannelStream';
import { compareIChannels } from '../../../tools/IChannel';
import useAudio from './useAudio';
import tools from '../../../tools';
import useChannelState from './useChannelState';

let _onCanPlay: () => void, _onError: () => void;

export default function useInitialAudioMethods(_channels?: IChannel[]) {
  const { enqueueSnackbar } = useSnackbar();
  const cm = useChannelState(_channels);

  const [status, setStatus] = useState<TAudioManagerStatus>('paused'); // Статус плеера
  const sourceURL = tools.IChannel.getAudioSourceLink(cm.current);
  const audioRef = useAudio(sourceURL, _onCanPlay, _onError);
  const stream = useChannelStream(cm.current);

  const isPaused = status == 'paused';
  const isPlayed = status == 'played';
  const isLoading = status == 'loading';
  const isError = status == 'error';
  const isCanPlay = isPaused || isError;

  //Внутренний метод для установки новой аудио ссылки
  const _setSrc = useCallback(
    (src: string) => {
      // @ts-ignore
      audioRef.current.src = src;
    },
    [audioRef]
  );
  //Играть аудио
  const _play = useCallback(() => {
    audioRef.current?.load();
  }, [audioRef]);

  //Остановить аудио
  const _stop = useCallback(() => {
    audioRef.current?.pause();
  }, [audioRef]);

  //Играть
  const play = useCallback(() => {
    startTransition(() => {
      setStatus('loading');
      stream.startStream();
    });
    _play();
  }, [_play]);

  const stop = useCallback(() => {
    _stop();
    stream.stopStream();
    setStatus('paused');
  }, [_stop, stream]);

  //Переключать
  const toggle = useCallback(() => {
    // console.log('_toggle');
    if (isCanPlay) play();
    else stop();
  }, [isCanPlay, play, stop]);

  //Переключать
  const reload = useCallback(() => {
    _stop();
    stream.pauseStream();
    startTransition(() => {
      setStatus('loading');
      stream.startStream();
    });
    _play();
  }, [_play, _stop, stream]);

  const load = useCallback(
    (c?: IChannel) => {
      if (!c) return;
      const s = tools.IChannel.getAudioSourceLink(c);
      stream.stopStream();
      audioRef.current?.pause();
      // @ts-ignore
      _setSrc(s); //Делаем канал текущим
      startTransition(() => {
        cm.setChannel(c);
      });
    },
    [_setSrc, audioRef, cm, stream]
  );

  const set = useCallback(
    (c: IChannel | null | undefined, isAndPlay: false) => {
      // Если передали аргумент канала то сравниваем каналы
      if (!c) return;
      const isCurrentChannel = compareIChannels(c, cm.current);
      if (isCurrentChannel) toggle();
      else {
        load(c);
        if (isPlayed || isAndPlay) reload(); //Воспроизводим если можно
      }
    },
    [cm, isPlayed, load, reload, toggle]
  );

  const setPrev = useCallback(
    (isAndPlay: false) => {
      // Если передали аргумент канала то сравниваем каналы
      const prev = cm.getPrev();
      if (prev) set(prev, isAndPlay);
    },
    [cm, set]
  );

  const setNext = useCallback(
    (isAndPlay: false) => {
      // Если передали аргумент канала то сравниваем каналы
      const next = cm.getNext();
      if (next) set(next, isAndPlay);
    },
    [cm, set]
  );

  //Как только трек будет загружен
  _onCanPlay = useCallback(() => {
    if (audioRef.current)
      audioRef.current?.play().finally(() => {
        startTransition(() => {
          setStatus('played');
        });
      });
  }, [audioRef, stream]);

  //При ошибках загрузки
  _onError = useCallback(() => {
    console.error('Случилась ошибка при загрузке данных канала');
    stream.stopStream();
    setStatus('error');
    audioRef.current?.pause();
    enqueueSnackbar(`Случилась ошибка при загрузке данных канала`, {
      variant: 'error',
      autoHideDuration: 5000,
    });
  }, [audioRef, stream, enqueueSnackbar]);

  return {
    audioRef,
    play,
    stop,
    status,
    toggle,
    stream,
    set,
    setPrev,
    setNext,
    channels: cm.channels,
    channel: cm.current,
    isLoadingChannel: cm.isLoading,
  };
}
