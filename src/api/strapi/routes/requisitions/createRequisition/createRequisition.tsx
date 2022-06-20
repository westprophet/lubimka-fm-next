/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 19.06.2022
 */

import StrapiAxios from '../../../global';
import IStrapiReturn from '../../../types/IStrapiReturn';

import { ICreateRequisitionResponse, ICreateRequisitionRequestParams } from './types';

import getParamsObject from './utils/getParamsObject';
import IRequisition from 'interfaces/IRequisition';

export default async function createRequisition(
  p: ICreateRequisitionRequestParams
): Promise<ICreateRequisitionReturn> {
  try {
    const { data }: { data: ICreateRequisitionResponse } = await StrapiAxios.post(
      '/requisitions',
      getParamsObject(p)
    );
    return {
      data: data.data,
    };
  } catch (e) {
    console.error('STRAPI: CreateRequisition:', e);
    return {
      data: null,
      meta: null,
    };
  }
}

export type ICreateRequisitionReturn = IStrapiReturn<IRequisition | null>;
