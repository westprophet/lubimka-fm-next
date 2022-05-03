import { useQuery } from 'react-query';
import { IChannel } from '../../../../../interfaces';
import api from '../../../../../api';
import TAudioTitle from '../../../../../types/TAudioTitle';
import { ITrackRadioheartPrev } from '../../../../../interfaces/ITrackRadioheart';

//Получаем последние треки на канале
export default function useGetTracks(
  c: IChannel,
  title: TAudioTitle | null
): {
  isLoading: boolean;
  isError: boolean;
  data: null | ITrackRadioheartPrev[];
} {
  const { isLoading, isError, data } = useQuery(
    ['getLastTrack', c.attributes.name, title?.title, title?.artist],
    () => api.radio.tracks.getLastTracks({ c }),
    {
      retryDelay: 2000,
      enabled: !!c,
      // refetchInterval: 3000,
      // notifyOnChangeProps: ,
      refetchOnWindowFocus: true,
    }
  );
  return {
    data: data ?? null,
    isLoading,
    isError,
  };
}
