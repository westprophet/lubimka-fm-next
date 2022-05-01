import { radio } from '../../../api';
import IRadioHearthStreamData from '../../../api/radioheathAPI/types/IRadioHearthStreamData';
import IChannel from '../../../interfaces/IChannel';
import { useCallback, useRef, useState } from 'react';

import FETCH_STREAM_TIMOUT from '../constants/FETCH_STREAM_TIMOUT';

//Поток данных трансляции
export default function useCreateDataStream(c?: IChannel | null) {
  const timer = useRef(); //Таймер
  const [data, setData] = useState<IRadioHearthStreamData | null>(); //Состояние данных

  //При ошибке
  const onError = useCallback((e) => {
    console.error('Something went wrong', e);
    stopStream();
  }, []);

  //При удачной итерации
  const onSuccess = useCallback((r) => setData(r), [setData]);

  //Остановить поток
  const stopStream = useCallback(() => {
    setData(null);
    clearInterval(timer.current);
  }, [setData]);

  //Начать поток
  const startStream = useCallback(() => {
    radio.stream
      .fetchRadioStreamData(c)
      .then((r: IRadioHearthStreamData) => {
        clearInterval(timer.current);
        onSuccess(r);
        // @ts-ignore
        timer.current = setInterval(
          // eslint-disable-next-line promise/no-nesting
          () => radio.stream.fetchRadioStreamData(c).then(onSuccess).catch(onError),
          FETCH_STREAM_TIMOUT
        );
      })
      .catch(onError);
  }, [c, onError, onSuccess]);

  return {
    data,
    startStream,
    stopStream,
  };
}
