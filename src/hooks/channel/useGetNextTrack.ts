import { useQuery } from 'react-query';
import { IChannel } from 'interfaces/IChannel';
import api from 'api/index';
import { ITrackRadioheartNext } from 'interfaces/ITrackRadioheart';
import TAudioTitle from 'types/TAudioTitle';

//Получаем последние треки на канале
export default function useGetNextTrack(
  c: IChannel,
  title: TAudioTitle | null
): {
  // isLoading: boolean;
  isError: boolean;
  data: null | ITrackRadioheartNext;
} {
  const { isError, data } = useQuery(
    ['getNextTrack', c.attributes.name, title],
    () => api.radio.tracks.getNextTracks({ c, count: 1 }),
    {
      retryDelay: 2000,
      enabled: !!c && !!title,
      refetchOnWindowFocus: false,
    }
  );
  return {
    data: data ? data[0] : null,
    isError,
  };
}
