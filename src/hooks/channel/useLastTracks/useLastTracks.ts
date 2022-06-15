import useGetLastTracks from './useGetLastTracks';
import useGetLastTrack from './useGetLastTrack';
import useAddLastTrack from './useAddLastTrack';
import IChannel from 'interfaces/IChannel';
import TAudioTitle from '../../../types/TAudioTitle';

interface IUseLastTracksArg {
  c: IChannel;
  title: TAudioTitle | null;
}

export default function useLastTracks({ c, title }: IUseLastTracksArg) {
  const { data: tracks, isLoading } = useGetLastTracks({ c }); //Получаем все последние треки
  const { data: lastTrack } = useGetLastTrack({ c, title }); // Запрашиваем периодически последний 1 трек
  return {
    data: useAddLastTrack(lastTrack, tracks), //Добавляем этот последний трек
    isLoading,
  };
}
