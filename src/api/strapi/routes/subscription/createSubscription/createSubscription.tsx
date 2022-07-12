/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 19.06.2022
 */

import StrapiAxios from '../../../global';

import { ICreateSubscriptionResponse, ICreateSubscriptionRequestParams } from './types';

import getParamsObject from './utils/getParamsObject';

export default async function createSubscription(
  p: ICreateSubscriptionRequestParams
): Promise<ICreateRequisitionReturn | undefined> {
  try {
    const { data }: { data: ICreateSubscriptionResponse } = await StrapiAxios.post(
      '/subscriptions',
      getParamsObject(p)
    );
    return data;
  } catch (e) {
    console.error('STRAPI: CreateSubscription:', e);
    throw e;
  }
}

export type ICreateRequisitionReturn = ICreateSubscriptionResponse;
