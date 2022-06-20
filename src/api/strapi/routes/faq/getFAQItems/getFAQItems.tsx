/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 20.06.2022
 */

import StrapiAxios from '../../../global';
import IStrapiReturn from '../../../types/IStrapiReturn';

import { IGetFAQItemsResponse } from './types';
import { IFAQItem } from 'interfaces/index';

import getParamsObject from './utils/getParamsObject';

export default async function getFAQItems(): Promise<IGetFAQItemsReturn> {
  try {
    const { data }: { data: IGetFAQItemsResponse } = await StrapiAxios.get('/faqs', {
      params: getParamsObject(),
    });
    return {
      data: data.data,
      meta: data.meta,
    };
  } catch (e) {
    console.error('STRAPI: GetFAQItems:', e);
    return {
      data: null,
      meta: null,
    };
  }
}

export type IGetFAQItemsReturn = IStrapiReturn<IFAQItem[] | null>;
