/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 16.06.2022
 */

import StrapiAxios from '../../../global';

import { IGetRadioProgramsResponse, IGetRadioProgramsRequestParams } from './types';
import { IRadioProgram } from 'interfaces/IRadioProgram';

import getParamsObject from './utils/getParamsObject';

export default async function getRadioProgramsByChannel(
  p?: IGetRadioProgramsRequestParams
): Promise<IGetRadioProgramsByChannelReturn> {
  try {
    const { data }: { data: IGetRadioProgramsResponse } = await StrapiAxios.get('/radio-programs', {
      params: getParamsObject(p),
    });

    return data.data;
  } catch (e) {
    console.error('STRAPI: GetRadioProgramsByChannel:', e);
    return null;
  }
}

export type IGetRadioProgramsByChannelReturn = IRadioProgram[] | null;
