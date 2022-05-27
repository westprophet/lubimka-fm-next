/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 13.04.2022
 *
 *
 * Пример: {{server}}/api/clubs/1/?populate[Emails]=*&populate[Socials][populate][icon][populate]=*&populate[preview]=*&populate[Phones]=*
 */

import StrapiAxios from '../../../global';
import isValidGetClubResponse from './validators/isValidGetClubResponse';
import { IGetClubResponse } from './types/IGetClubResponse';
import { IClub } from '../../../../../interfaces';
import getParamsObject from './utils/getParamsObject';
import { IGetClubRequestParams } from './types/IGetClubRequestParams';

export default async function getClub(p: IGetClubRequestParams): Promise<IGetClubsReturn> {
  if (!p.id) throw '';
  try {
    const { data }: { data: IGetClubResponse } = await StrapiAxios.get(`/clubs/${p.id}`, {
      params: getParamsObject(p),
    });
    if (isValidGetClubResponse(data)) {
      return data.data;
    } else throw '';
  } catch (e) {
    console.error('STRAPI: GetClub:', e);
    return null;
  }
}

export type IGetClubsReturn = IClub | null;
