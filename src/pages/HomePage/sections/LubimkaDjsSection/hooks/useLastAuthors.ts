import { IAuthor } from 'src/interfaces';
import { useQuery } from 'react-query';
import api from '../../../../../api';
import { IGetAuthorsReturn } from '../../../../../api/strapi/routes/authors/getAuthors/getAuthors';

//Получаем последнее добавленных диджеев
export default function useLastAuthors(): {
  isLoading: false | true;
  data: IGetAuthorsReturn | void;
  authors: IAuthor[];
} {
  const { isLoading, error, data } = useQuery<IGetAuthorsReturn | void, Error>(
    'getLastAuthors',
    () =>
      api.strapi.authors.getAuthors().catch(() => {
        console.error('getLastAuthors error');
      }),
    {
      refetchOnWindowFocus: false,
    }
  );
  return {
    data: data,
    // @ts-ignore
    authors: data?.data,
    isLoading,
  };
}
