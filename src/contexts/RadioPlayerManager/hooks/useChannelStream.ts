import { radio } from '../../../api';
import IRadioHearthStreamData from '../../../api/radioheathAPI/types/IRadioHearthStreamData';
import IChannel from '../../../interfaces/IChannel';
import { useCallback, useRef, useState } from 'react';

import FETCH_STREAM_TIMOUT from '../constants/FETCH_STREAM_TIMOUT';
import TRadioHearthStreamDataStatus from '../../../types/TRadioHearthStreamDataStatus';
import getTitle from '../../../tools/IRadioHearthStreamData/getTitle';
import compareTAudioTitle from '../../../tools/TAudioTitle/compareTAudioTitle';
import TCreatedStream from '../../../types/TCreatedStream';

//Поток данных трансляции
export default function useChannelStream(
  c?: IChannel | null,
  timeout: number = FETCH_STREAM_TIMOUT
): TCreatedStream {
  const timer = useRef(); //Таймер
  const status = useRef<TRadioHearthStreamDataStatus>('stopped');
  const [data, setData] = useState<IRadioHearthStreamData | null>(null); //Состояние данных

  //При ошибке
  const onError = useCallback((e) => {
    console.error('Something went wrong', e);
    stopStream();
    // if (withStatus) setStatus('error');
    status.current = 'error';
  }, []);

  //При удачной итерации
  const onSuccess = useCallback(
    (r) =>
      setData((prevState: IRadioHearthStreamData | null) => {
        const oldTitle = getTitle(prevState);
        const newTitle = getTitle(r);
        return compareTAudioTitle(newTitle, oldTitle) ? prevState : r;
      }),
    [setData]
  );

  //Остановить поток
  const stopStream = useCallback(() => {
    clearInterval(timer.current);
    if (data !== null) setData(null);
    status.current = 'stopped';
  }, [setData]);

  //Приостановить поток
  const pauseStream = useCallback(() => {
    clearInterval(timer.current);
    status.current = 'paused';
  }, [setData]);

  //Начать поток
  const startStream = useCallback(() => {
    radio.stream
      .fetchRadioStreamData(c)
      .then((r: IRadioHearthStreamData) => {
        clearInterval(timer.current);
        status.current = 'active';
        onSuccess(r);
        // @ts-ignore
        timer.current = setInterval(
          // eslint-disable-next-line promise/no-nesting
          () => radio.stream.fetchRadioStreamData(c).then(onSuccess).catch(onError),
          timeout
        );
      })
      .catch(onError);
  }, [c, onError, onSuccess]);

  return {
    data,
    status: status.current,
    startStream,
    stopStream,
    pauseStream,
  };
}
