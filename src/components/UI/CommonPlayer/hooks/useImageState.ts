import TAudioTitle from '../../../../types/TAudioTitle';

import { useQuery } from 'react-query';
import api from '../../../../api';

//Получение картинки и запись ее в состояние
export default function useGetImage(title: TAudioTitle | null) {
  const { isLoading, error, data } = useQuery(
    ['image-fetch', title],
    () =>
      api.radio.image.getImageByArtist(title.artist, title.title).catch(() => {
        console.error('useGetImage error');
      }),
    {
      retry: 5,
      retryDelay: 2000,
      enabled: !!title,
    }
  );
  return {
    image: data && 'image' in data ? data.image : null,
    isLoading,
  };
}
