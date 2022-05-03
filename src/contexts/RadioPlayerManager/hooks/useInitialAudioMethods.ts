import { useCallback, useState } from 'react';
import IChannel from 'src/interfaces/IChannel';
import { useSnackbar } from 'notistack';
import { TAudioManagerStatus } from '../../../types/TAudioManagerStatus';
import useChannelStream from './useChannelStream';
import { compareIChannels } from '../../../tools/IChannel';
import useAudio from './useAudio';
import tools from '../../../tools';

let play: (c?: IChannel) => void,
  _load: () => void,
  _play: () => void,
  _stop: () => void,
  _toggle: () => void,
  _reload: () => void,
  _onCanPlay: () => void,
  _onError: () => void,
  _setSrc: (src: string) => void,
  _playChannel: (c: IChannel) => void,
  reload: () => void,
  stop: () => void,
  toggle: () => void;

export default function useInitialAudioMethods(
  channel: IChannel | null,
  setChannel: { (c: IChannel): void; (arg0: IChannel): void }
) {
  const { enqueueSnackbar } = useSnackbar();
  const [status, setStatus] = useState<TAudioManagerStatus>('paused'); // Статус плеера
  const sourceURL = tools.IChannel.getAudioSourceLink(channel);
  const audioRef = useAudio(sourceURL, _onCanPlay, _onError);

  const {
    data: streamData,
    status: streamStatus,
    startStream,
    stopStream,
  } = useChannelStream(channel);

  const isPaused = status == 'paused';
  const isError = status == 'error';
  const isCanPlay = isPaused || isError;

  //Подгружаем трек
  _load = useCallback(() => {
    setStatus('loading');
    audioRef.current?.load();
    startStream();
  }, [audioRef, startStream]);

  //перезагрузить
  _reload = useCallback(() => {
    audioRef.current?.pause();
    stopStream();
    _load();
  }, [audioRef, stopStream]);

  //Внутренний метод для установки новой аудио ссылки
  _setSrc = useCallback(
    (src: string) => {
      // @ts-ignore
      audioRef.current.src = src;
    },
    [audioRef]
  );

  //Играть
  _play = useCallback(() => {
    if (isCanPlay) _load();
  }, [isCanPlay]);

  //Остановить
  _stop = useCallback(() => {
    setStatus('paused');
    audioRef.current?.pause();
    stopStream();
  }, [audioRef, stopStream]);

  //Играть
  _toggle = useCallback(() => {
    // console.log('_toggle');
    if (isCanPlay) _load();
    else _stop();
  }, [isCanPlay]);

  //Запустить канал
  _playChannel = useCallback(
    (c: IChannel) => {
      // Если передали аргумент канала то сравниваем каналы
      if (c && compareIChannels(c, channel)) _toggle();
      else if (c) {
        const s = tools.IChannel.getAudioSourceLink(c);
        // @ts-ignore
        _setSrc(s); //Делаем канал текущим
        _reload();
        setChannel(c);
      }
    },
    [channel, setChannel]
  );

  //Играть или запустить канал
  play = useCallback((c?: IChannel) => {
    if (c) _playChannel(c);
    else _play();
  }, []);

  //Стоп
  stop = useCallback(() => {
    _stop();
  }, []);

  toggle = useCallback(
    (c?: IChannel) => {
      if (isCanPlay) play(c);
      else stop();
    },
    [isCanPlay]
  );

  //Как только трек будет загружен
  _onCanPlay = useCallback(() => {
    if (audioRef.current) audioRef.current?.play().finally(() => setStatus('played'));
  }, [setStatus, audioRef]);

  //При ошибках загрузки
  _onError = useCallback(() => {
    setStatus('error');
    audioRef.current?.pause();
    stopStream();
    // console.error();
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
    toggle,
    stream: {
      status: streamStatus,
      data: streamData,
    },
  };
}
