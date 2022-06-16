/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 27.04.2022
 */

import StrapiAxios from '../../../global';
import { IGetChannelResponse } from './types';
import { IChannel } from 'interfaces/IChannel';
import getParamsObject from './utils/getParamsObject';

export default async function getChannel(id: string | number): Promise<IGetChannelReturn> {
  try {
    const { data }: { data: IGetChannelResponse } = await StrapiAxios.get(`/radio-shannels/${id}`, {
      params: getParamsObject(),
    });
    return data.data;
  } catch (e) {
    console.error('STRAPI: GetChannel:', e);
    return false;
  }
}

export type IGetChannelReturn = IChannel | false;
