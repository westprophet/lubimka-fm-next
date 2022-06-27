import { useQuery } from 'react-query';
import api from 'api/index';
import { IGetPostsReturn } from 'api/strapi/routes/posts/getPosts/getPosts';

export default function useGetPosts({ search, pagination, categoryID }: IGetPostsArg) {
  return useQuery<IGetPostsReturn>(
    ['getPosts', search, pagination?.page, pagination?.pageSize, categoryID],
    () =>
      api.strapi.posts.getPosts({
        categoryId: categoryID,
        search,
        pagination: pagination,
      }),
    {
      retryDelay: 1000,
      staleTime: 1000 * 60 * 60 * 24,
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
    }
  );
}

export interface IGetPostsArg {
  search?: string;
  categoryID?: number;
  pagination?: {
    page: number;
    pageSize: number;
  };
}
