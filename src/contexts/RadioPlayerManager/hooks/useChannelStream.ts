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
export default function useChannelStream(
  c?: IChannel | null,
  timeout: number = FETCH_STREAM_TIMOUT //3 сек
): TCreatedStream {
  const [status, setStatus] = useState<TRadioHearthStreamDataStatus>('stopped'); //Состояние данных
  const isActive = status === 'active';
  const { data } = useQuery(
    [c],
    () => {
      return radio.stream.fetchRadioStreamData(c);
    },
    {
      enabled: isActive,
      notifyOnChangeProps: ['data', 'error'],
      refetchIntervalInBackground: true,
      refetchInterval: timeout,
      onError: (e) => {
        console.error(e);
        setStatus('error');
      },
      cacheTime: timeout,
      staleTime: timeout,
    }
  );
  //Остановить поток
  const stopStream = useCallback(() => setStatus('stopped'), []);

  //Приостановить поток
  const pauseStream = useCallback(() => setStatus('paused'), []);

  //Начать поток
  const startStream = useCallback(() => setStatus('active'), []);

  const _data: IRadioHearthStreamDataMount | null = rTools.getMount(data);
  const current: TAudioTitle | null = splitTrackName(_data);

  return {
    data,
    current,
    status,
    startStream,
    stopStream,
    pauseStream,
  };
}
