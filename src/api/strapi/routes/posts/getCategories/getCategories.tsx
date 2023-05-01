/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 27.06.2022
 */

import StrapiAxios from '../../../global';

import { IGetCategoriesResponse, IGetCategoriesRequestParams } from './types';
import { IBlogCategory } from 'interfaces/IBlogCategory';

import getParamsObject from './utils/getParamsObject';

export default async function getCategories(
  p: IGetCategoriesRequestParams
): Promise<IGetCategoriesReturn> {
  try {
    const { data }: { data: IGetCategoriesResponse } = await StrapiAxios.get('/blog-categories', {
      params: getParamsObject(p),
    });
    return data.data;
  } catch (e) {
    console.error('STRAPI: GetCategories:', e);
    return null;
  }
}

export type IGetCategoriesReturn = IBlogCategory[] | null;
