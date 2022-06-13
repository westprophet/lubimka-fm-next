import { useQuery } from 'react-query';
import { IChannel } from 'interfaces/IChannel';
import api from 'api/index';
import { ITrackRadioheartNew, ITrackRadioheartPrev } from 'interfaces/ITrackRadioheart';

//Получаем последние треки на канале
export default function useGetLastTracks({
  c,
  initialTracks,
}: IUseGetLastTracksArg): IUseGetLastTracksReturn {
  const { isError, data, isLoading } = useQuery(
    ['getLastTrack', c.attributes.name],
    () => api.radio.tracks.getLastTracks({ c }),
    {
      retryDelay: 2000,
      enabled: !!c,
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
    }
  );
  if (isError) console.error(`Последние треки для канала ${c.attributes.title} не загружены`);
  return {
    data: data ?? null,
    isLoading,
    isError,
  };
}

interface IUseGetLastTracksArg {
  c: IChannel;
  initialTracks?: ITrackRadioheartPrev[];
}

interface IUseGetLastTracksReturn {
  isError: boolean;
  isLoading: boolean;
  data: null | ITrackRadioheartPrev[];
}
