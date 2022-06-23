/**
 * Created by westp on 12.04.2022
 *
 *  Параметры для вытаскивания вложенности документация
 *  https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields
 */

import StrapiAxios from '../../../global';
import IStrapiReturn from '../../../types/IStrapiReturn';
import { IGetEventsResponse } from './types/IGetEventsResponse';
import { IEvent } from 'interfaces/IEvent';
import { IGetEventsRequestParams } from './types/IGetEventsRequestParams';
import getParamsObject from './utils/getParamsObject';

export default async function getEvents(p?: IGetEventsRequestParams): Promise<IGetEventsReturn> {
  try {
    const { data }: { data: IGetEventsResponse } = await StrapiAxios.get('/events', {
      params: getParamsObject(p),
    });
    return {
      data: data.data,
      meta: data.meta,
    };
  } catch (e) {
    console.error('STRAPI: GetEvents:', e);
    return {
      data: null,
      meta: null,
    };
  }
}

export type IGetEventsReturn = IStrapiReturn<IEvent[] | null>;
