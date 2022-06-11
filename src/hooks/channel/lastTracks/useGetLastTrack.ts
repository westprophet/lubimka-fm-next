import { useQuery } from 'react-query';
import { IChannel } from 'interfaces/IChannel';
import api from 'api/index';
import { ITrackRadioheartPrev } from 'interfaces/ITrackRadioheart';
import TAudioTitle from '../../../types/TAudioTitle';

//Получаем последние треки на канале
export default function useGetLastTrack(
  c: IChannel,
  title: TAudioTitle | null
): {
  // isLoading: boolean;
  isError: boolean;
  data: null | ITrackRadioheartPrev[];
} {
  const { isError, data } = useQuery(
    ['getLastTrack', c.attributes.name, title],
    () => api.radio.tracks.getLastTracks({ c, count: 1 }),
    {
      retryDelay: 2000,
      enabled: !!c && !!title,
      refetchOnWindowFocus: false,
    }
  );
  return {
    data: data ?? null,
    isError,
  };
}
