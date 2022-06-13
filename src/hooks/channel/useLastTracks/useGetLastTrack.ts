import { useQuery } from 'react-query';
import { IChannel } from 'interfaces/IChannel';
import api from 'api/index';
import { ITrackRadioheartPrev } from 'interfaces/ITrackRadioheart';
import TAudioTitle from 'types/TAudioTitle';

//Получаем последние треки на канале
export default function useGetLastTrack({ c, title }: IUseGetLastTrackArg): IUseGetLastTrackReturn {
  const { isError, data, isLoading } = useQuery(
    ['getLastTrack', c.attributes.name, title],
    () => api.radio.tracks.getLastTracks({ c, count: 1 }),
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
interface IUseGetLastTrackArg {
  c: IChannel;
  title: TAudioTitle | null;
}

interface IUseGetLastTrackReturn {
  isError: boolean;
  isLoading: boolean;
  data: null | ITrackRadioheartPrev;
}
