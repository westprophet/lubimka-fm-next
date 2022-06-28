/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 27.06.2022
 */

import StrapiAxios from '../../../global';

import { IGetPostResponse, IGetPostRequestParams } from './types';
import { IPostDetail } from 'interfaces/IPost';

import getParamsObject from './utils/getParamsObject';

export default async function getPost(p: IGetPostRequestParams): Promise<IGetPostsReturn> {
  try {
    const { data }: { data: IGetPostResponse } = await StrapiAxios.get('/news-posts', {
      params: getParamsObject(p),
    });
    if (Array.isArray(data.data)) return data.data[0];
    else throw '';
  } catch (e) {
    console.error('STRAPI: GetPost:', e);
    return null;
  }
}

export type IGetPostsReturn = IPostDetail | null;
