import { useQuery } from 'react-query';
import { IChannel } from '../../../../../interfaces';
import api from '../../../../../api';
import { ITrackRadioheartPrev } from '../../../../../interfaces/ITrackRadioheart';

//Получаем последние треки на канале
export default function useGetTracks(c: IChannel): {
  // isLoading: boolean;
  isError: boolean;
  data: null | ITrackRadioheartPrev[];
} {
  const { isLoading, isError, data } = useQuery(
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
