import TAudioTitle from '../types/TAudioTitle';

import { useQuery } from 'react-query';
import api from '../api';
import isEmptyString from '../utils/isEmptyString';

//Получение картинки и запись ее в состояние
export default function useGetImage(
  title: TAudioTitle | null | undefined,
  isCanFetchImage = true
): {
  isLoading: boolean;
  isError: boolean;
  image: string | null;
} {
  const lock = !title || isEmptyString(title?.artist) || isEmptyString(title?.title);

  const { isLoading, isError, data } = useQuery(
    ['image-fetch', title],
    () =>
      api.radio.image.getImageByArtist(title?.artist, title?.title).catch(() => {
        console.error('useGetImage error');
      }),
    {
      retryDelay: 3600,
      enabled: !lock && isCanFetchImage,
      cacheTime: 864000,
      staleTime: 864000,
      notifyOnChangeProps: ['data'],
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );
  return {
    image: data && 'image' in data ? data.image : null,
    isLoading,
    isError,
  };
}
