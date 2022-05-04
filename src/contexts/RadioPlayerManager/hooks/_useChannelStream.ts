// @ts-ignore
import { startTransition, useCallback, useRef, useState } from 'react';
import { radio } from '../../../api';
import IRadioHearthStreamData from '../../../api/radioheathAPI/types/IRadioHearthStreamData';
import IChannel from '../../../interfaces/IChannel';

import FETCH_STREAM_TIMOUT from '../constants/FETCH_STREAM_TIMOUT';
import TRadioHearthStreamDataStatus from '../../../types/TRadioHearthStreamDataStatus';
import getTitle from '../../../tools/IRadioHearthStreamData/getTitle';
import compareTAudioTitle from '../../../tools/TAudioTitle/compareTAudioTitle';
import TCreatedStream from '../../../types/TCreatedStream';
import IRadioHearthStreamDataMount from '../../../api/radioheathAPI/types/IRadioHearthStreamDataMount';
import rTools from '../../../api/radioheathAPI/tools';
import TAudioTitle from '../../../types/TAudioTitle';
import { splitTrackName } from '../../../tools/IRadioHearthStreamDataMount';
import { useQuery } from 'react-query';

//Поток данных трансляции
let onSuccess: (r: IRadioHearthStreamData) => any;

export default function useChannelStream(
  c?: IChannel | null,
  timeout: number = FETCH_STREAM_TIMOUT
): TCreatedStream {
  const timer = useRef(); //Таймер
  const status = useRef<TRadioHearthStreamDataStatus>('stopped');
  const [data, setData] = useState<IRadioHearthStreamData | null>(null); //Состояние данных

  //Остановить поток
  const stopStream = useCallback(() => {
    clearInterval(timer.current);
    status.current = 'stopped';
    setData(null);
  }, []);

  //Приостановить поток
  const pauseStream = useCallback(() => {
    clearInterval(timer.current);
    status.current = 'paused';
  }, []);

  //При ошибке
  const onError = useCallback(
    (e) => {
      console.error('Stream Fetcher: Something went wrong', e);
      status.current = 'error';
      stopStream();
    },
    [stopStream]
  );

  //При удачной итерации
  onSuccess = (r: IRadioHearthStreamData) => {
    if (!r) return;
    const oldTitle = getTitle(data);
    const newTitle = getTitle(r);
    const isEqual = compareTAudioTitle(newTitle, oldTitle);
    console.log(isEqual, oldTitle, newTitle);
    console.log(r, data);
    if (isEqual === false) startTransition(() => setData(r));
  };

  //Начать поток
  const startStream = useCallback(() => {
    clearInterval(timer.current);
    radio.stream
      .fetchRadioStreamData(c)
      .then((r: IRadioHearthStreamData) => {
        status.current = 'active';
        onSuccess(r);
        // @ts-ignore
        timer.current = setInterval(() => {
          radio.stream.fetchRadioStreamData(c).then(onSuccess).catch(onError);
        }, timeout);
      })
      .catch(onError);
  }, [c, onError, timeout]);

  const _data: IRadioHearthStreamDataMount | null = rTools.getMount(data);
  const current: TAudioTitle | null = splitTrackName(_data);

  return {
    data,
    current,
    status: status.current,
    startStream,
    stopStream,
    pauseStream,
  };
}
