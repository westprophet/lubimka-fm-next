import { radio } from '../api';
import IRadioHearthStreamData from '../api/radioheathAPI/types/IRadioHearthStreamData';
import IChannel from '../interfaces/IChannel';
import { useCallback, useRef, useState } from 'react';

import FETCH_STREAM_TIMOUT from '../contexts/RadioPlayerManager/constants/FETCH_STREAM_TIMOUT';
import TRadioHearthStreamDataStatus from '../types/TRadioHearthStreamDataStatus';

//Поток данных трансляции
export default function useChannelStream(
  c?: IChannel | null,
  timeout: number = FETCH_STREAM_TIMOUT
) {
  const timer = useRef(); //Таймер
  const [data, setData] = useState<IRadioHearthStreamData | null>(); //Состояние данных
  const [status, setStatus] = useState<TRadioHearthStreamDataStatus>('stopped'); //Состояние данных

  //При ошибке
  const onError = useCallback((e) => {
    console.error('Something went wrong', e);
    _stopStream();
    setStatus('error');
  }, []);

  //При удачной итерации
  const onSuccess = useCallback((r) => setData(r), [setData]);

  const _stopStream = useCallback(() => {
    setData(null);
    clearInterval(timer.current);
  }, [setData]);

  //Остановить поток
  const stopStream = useCallback(() => {
    _stopStream();
    setStatus('stopped');
  }, [setData]);

  //Начать поток
  const startStream = useCallback(() => {
    radio.stream
      .fetchRadioStreamData(c)
      .then((r: IRadioHearthStreamData) => {
        clearInterval(timer.current);
        setStatus('active');
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
    status,
    startStream,
    stopStream,
  };
}
