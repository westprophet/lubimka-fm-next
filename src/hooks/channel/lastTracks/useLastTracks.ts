import useGetLastTracks from 'hooks/channel/lastTracks/useGetLastTracks';
import useGetLastTrack from 'hooks/channel/lastTracks/useGetLastTrack';
import useAddLastTrack from 'hooks/channel/lastTracks/useAddLastTrack';
import IChannel from 'interfaces/IChannel';
import TAudioTitle from '../../../types/TAudioTitle';

export default function useLastTracks(channel: IChannel, title: TAudioTitle | null) {
  const { data: tracks } = useGetLastTracks(channel); //Получаем все последние треки
  const { data: lastTracks } = useGetLastTrack(channel, title); // Запрашиваем периодически последний 1 трек
  const lastTrack = lastTracks ? lastTracks[0] : null;
  return useAddLastTrack(lastTrack, tracks); //Добавляем этот последний трек
}
