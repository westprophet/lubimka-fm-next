/**
 * Created by westp on 12.04.2022
 *
 *  Параметры для вытаскивания вложенности документация
 *  https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields
 */

import StrapiAxios from '../../../global';
import isValidGetEventResponse from './validators/isValidGetEventResponse';
import { IGetEventResponse } from './types/IGetEventResponse';
import { IEvent } from '../../../../../interfaces';
import { IGetEventRequestParams } from './types/IGetEventRequestParams';
import getParamsObject from './utils/getParamsObject';

//Получаем ивент в подробностях
export default async function getEvent(p?: IGetEventRequestParams): Promise<IGetEventReturn> {
  if (!p?.id) throw '';
  try {
    const { data }: { data: IGetEventResponse } = await StrapiAxios.get(`/events/${p?.id}/`, {
      params: getParamsObject(p),
    });
    if (isValidGetEventResponse(data)) {
      return data.data;
    } else throw '';
  } catch (e) {
    console.error('STRAPI: GetEvent:', e);
    return null;
  }
}

export type IGetEventReturn = IEvent | null;
