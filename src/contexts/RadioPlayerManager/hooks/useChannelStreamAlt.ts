import useChannelStream from './useChannelStream';
import IChannel from '../../../interfaces/IChannel';
import FETCH_STREAM_TIMOUT from '../constants/FETCH_STREAM_TIMOUT';
import TAudioTitle from '../../../types/TAudioTitle';
import getTitle from '../../../tools/IRadioHearthStreamData/getTitle';

export default function useChannelStreamAlt(
  c: IChannel | null,
  timeout: number = FETCH_STREAM_TIMOUT
) {
  const { data, status, startStream, stopStream } = useChannelStream(c, timeout);

  const title: TAudioTitle | null = getTitle(data);

  return {
    title,
    status,
    startStream,
    stopStream,
  };
}
