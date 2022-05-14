import { useQuery } from 'react-query';
import api from '../../../api';
import { IGetAuthorsReturn } from '../../../api/strapi/routes/authors/getAuthors/getAuthors';

export default function useGetAuthors(
  search: string,
  initialData: IGetAuthorsReturn,
  page: number,
  pageSize = 50
) {
  return useQuery<IGetAuthorsReturn>(
    ['getEventsPages', search, page, pageSize],
    () =>
      api.strapi.authors.getAuthors({
        search,
        pagination: {
          page: page,
          pageSize: pageSize,
        },
      }),
    {
      initialData,
      retryDelay: 1000,
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
    }
  );
}
