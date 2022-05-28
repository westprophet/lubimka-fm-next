import TAudioTitle from '../types/TAudioTitle';

import { useQuery } from 'react-query';
import api from '../api';
import isEmptyString from '../utils/isEmptyString';
import moment from 'moment';

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
      retryDelay: moment.duration(1, 'h').asMilliseconds(),
      enabled: !lock && isCanFetchImage,
      cacheTime: moment.duration(10, 'd').asMilliseconds(),
      staleTime: moment.duration(10, 'd').asMilliseconds(),
      // cacheTime: 10 * 24 * (60 * (60 * 1000)), //milisec (10 d)
      // staleTime: 10 * 24 * (60 * (60 * 1000)), //milisec (10 d)
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
