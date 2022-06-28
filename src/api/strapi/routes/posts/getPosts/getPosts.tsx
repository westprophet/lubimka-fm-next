/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 27.06.2022
 */

import StrapiAxios from '../../../global';
import IStrapiReturn from '../../../types/IStrapiReturn';

import { IGetPostsResponse, IGetPostsRequestParams } from './types';
import { IPost } from 'interfaces/IPost';

import getParamsObject from './utils/getParamsObject';

export default async function getPosts(p?: IGetPostsRequestParams): Promise<IGetPostsReturn> {
  try {
    const { data }: { data: IGetPostsResponse } = await StrapiAxios.get('/news-posts', {
      params: getParamsObject(p),
    });
    return {
      data: data.data,
      meta: data.meta,
    };
  } catch (e) {
    console.error('STRAPI: GetPosts:', e);
    return {
      data: null,
      meta: null,
    };
  }
}

export type IGetPostsReturn = IStrapiReturn<IPost[] | null>;
