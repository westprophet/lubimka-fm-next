import { radio } from '../../../api';
import IRadioHearthStreamData from '../../../api/radioheathAPI/types/IRadioHearthStreamData';
import IChannel from '../../../interfaces/IChannel';
import { useRef } from 'react';

import FETCH_STREAM_TIMOUT from '../constants/FETCH_STREAM_TIMOUT';

export default function useFetchStream(c: IChannel) {
  const timer = useRef();
  return () => {
    return radio.stream.fetchRadioStreamData(c).then((r: IRadioHearthStreamData) => {
      clearInterval(timer.current);
      // @ts-ignore
      timer.current = setInterval(() => {}, FETCH_STREAM_TIMOUT);
    });
  };
}
