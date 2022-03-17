import { radio } from '../../../api';
import IRadioHearthStreamData from '../../../api/radioheathAPI/types/IRadioHearthStreamData';
import IChannel from '../../../interfaces/IChannel';
import { useCallback, useEffect, useRef, useState } from 'react';

import FETCH_STREAM_TIMOUT from '../constants/FETCH_STREAM_TIMOUT';

export default function useCreateDataStream(c: IChannel) {
  const timer = useRef();
  const [data, setData] = useState<IRadioHearthStreamData | null>();

  const onError = useCallback((e) => {
    console.error('Something went wrong', e);
  }, []);

  const onSuccess = useCallback((r) => setData(r), [setData]);

  const stopStream = useCallback(() => {
    setData(null);
    clearInterval(timer.current);
  }, [setData]);

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
