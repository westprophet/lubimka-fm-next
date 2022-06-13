import { useQuery } from 'react-query';
import { IChannel } from 'interfaces/IChannel';
import api from 'api/index';
import { ITrackRadioheartNew } from 'interfaces/ITrackRadioheart';

//Получаем новые треки
export default function useGetNewTracks({
  c,
  initialTracks,
}: IUseGetNewTracksArg): IUseGetNewTracksReturn {
  const { isError, isLoading, data } = useQuery(
    ['getNewTrack', c.attributes.name],
    () => api.radio.tracks.getNewTracks({ c, count: 100 }),
    {
      retryDelay: 2000,
      enabled: !!c,
      refetchOnWindowFocus: false,
      initialData: initialTracks ?? null,
    }
  );
  if (isError) console.error(`Новые треки для канала ${c.attributes.title} не загружены`);

  return {
    data: data ?? null,
    isError,
    isLoading,
  };
}

interface IUseGetNewTracksArg {
  c: IChannel;
  initialTracks?: ITrackRadioheartNew[] | null;
}

interface IUseGetNewTracksReturn {
  isError: boolean;
  isLoading: boolean;
  data: null | ITrackRadioheartNew[];
}
