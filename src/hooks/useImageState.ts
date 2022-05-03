import TAudioTitle from '../types/TAudioTitle';

import { useQuery } from 'react-query';
import api from '../api';
import isEmptyString from '../utils/isEmptyString';

//Получение картинки и запись ее в состояние
export default function useGetImage(title: TAudioTitle | null): {
  isLoading: boolean;
  image: string | null;
} {
  const lock = !title || isEmptyString(title?.artist) || isEmptyString(title?.title);

  const { isLoading, error, data } = useQuery(
    ['image-fetch', title],
    () =>
      api.radio.image.getImageByArtist(title?.artist, title?.title).catch(() => {
        console.error('useGetImage error');
      }),
    {
      retryDelay: 2000,
      enabled: !lock,
      cacheTime: 10 * (60 * (60 * 1000)), //milisec (10 h)
      notifyOnChangeProps: ['data'],
      refetchOnWindowFocus: false,
    }
  );
  return {
    image: data && 'image' in data ? data.image : null,
    isLoading,
  };
}
