import { useQuery } from 'react-query';
import api from 'api/index';
import { IGetPostsReturn } from 'api/strapi/routes/posts/getPosts/getPosts';
import { IGetPostsRequestParams } from 'api/strapi/routes/posts/getPosts/types';

export default function useGetPosts({ search, pagination, categoryID }: IGetPostsArg) {
  return useQuery<IGetPostsReturn>(
    ['getPosts', search, pagination?.page, pagination?.pageSize, categoryID],
    () => {
      const params: IGetPostsRequestParams = {
        search,
        pagination: pagination,
      };
      if (categoryID) params.categoryId = categoryID;
      return api.strapi.posts.getPosts(params);
    },
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
