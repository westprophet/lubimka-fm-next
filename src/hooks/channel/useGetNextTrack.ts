import { useQuery } from 'react-query';
import { IChannel } from 'interfaces/IChannel';
import api from 'api/index';
import { ITrackRadioheartNext } from 'interfaces/ITrackRadioheart';
import TAudioTitle from 'types/TAudioTitle';

//Получаем последние треки на канале
export default function useGetNextTrack({
  c,
  title,
}: IUseGetNextTracksArg): IUseGetNextTracksReturn {
  const { isError, data, isLoading } = useQuery(
    ['getNextTrack', c.attributes.name, title],
    () => api.radio.tracks.getNextTracks({ c, count: 3 }),
    {
      retryDelay: 2000,
      enabled: !!c && !!title,
      refetchOnWindowFocus: false,
    }
  );
  return {
    data: data ? data[0] : null,
    isError,
    isLoading,
  };
}
interface IUseGetNextTracksArg {
  c: IChannel;
  title: TAudioTitle | null;
}

interface IUseGetNextTracksReturn {
  isError: boolean;
  isLoading: boolean;
  data: ITrackRadioheartNext | null;
}
