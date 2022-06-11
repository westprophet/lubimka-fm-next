import { useQuery } from 'react-query';
import { IChannel } from 'interfaces/IChannel';
import api from 'api/index';
import { ITrackRadioheartPrev } from 'interfaces/ITrackRadioheart';

//Получаем последние треки на канале
export default function useGetLastTracks(c: IChannel): {
  // isLoading: boolean;
  isError: boolean;
  data: null | ITrackRadioheartPrev[];
} {
  const { isError, data } = useQuery(
    ['getLastTrack', c.attributes.name],
    () => api.radio.tracks.getLastTracks({ c }),
    {
      retryDelay: 2000,
      enabled: !!c,
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
    }
  );
  return {
    data: data ?? null,
    // isLoading,
    isError,
  };
}
