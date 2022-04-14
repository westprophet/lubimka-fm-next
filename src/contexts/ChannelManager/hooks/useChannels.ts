import IChannel from 'src/interfaces/IChannel';
// import { CHANNELS } from '../constants';
import { useQuery } from 'react-query';
import api from '../../../api';

//Получаем каналы по умолчанию и пробуем подгружать каналы от сервера
export default function useChannels(channels: IChannel[] = []): {
  channels: IChannel[];
  isLoading: boolean;
} {
  const { isLoading, error, data } = useQuery(
    'getAllChannels',
    () =>
      api.strapi.channels.getChannels().catch(() => {
        console.error('getChannels error');
      }),
    {
      initialData: channels,
      refetchOnWindowFocus: false,
    }
  );

  return {
    // @ts-ignore
    channels: data,
    isLoading,
  };
}
