/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 17.06.2022
 */

import StrapiAxios from '../../../global';

import { IGetRadioProgramResponse, IGetRadioProgramRequestParams } from './types';
import { IRadioProgram } from 'interfaces/IRadioProgram';

import getParamsObject from './utils/getParamsObject';

export default async function getRadioProgram(
  p: IGetRadioProgramRequestParams
): Promise<IGetRadioProgramReturn> {
  try {
    const { data }: { data: IGetRadioProgramResponse } = await StrapiAxios.get(
      `/radio-programs/${p.id}`,
      {
        params: getParamsObject(p),
      }
    );
    return data.data;
  } catch (e) {
    console.error('STRAPI: GetRadioProgram:', e);
    return null;
  }
}

export type IGetRadioProgramReturn = IRadioProgram | null;
