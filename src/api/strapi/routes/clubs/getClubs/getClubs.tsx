/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 13.04.2022
 *
 *
 * Пример: {{server}}/api/clubs?populate[Emails]=*&populate[Socials][populate][icon][populate]=*&populate[preview]=*&populate[Phones]=*
 */

import StrapiAxios from '../../../global';
import IStrapiReturn from '../../../types/IStrapiReturn';
import isValidGetClubsResponse from './validators/isValidGetClubsResponse';
import { IGetClubsResponse } from './types/IGetClubsResponse';
import { IClub } from '../../../../../interfaces';

export default async function getClubs(): Promise<IGetClubsReturn> {
  try {
    const { data }: { data: IGetClubsResponse } = await StrapiAxios.get(`/clubs`, {
      params: {
        'populate[Emails]': '*',
        'populate[Socials][populate][icon][populate]': '*',
        'populate[Phones]': '*',
        'populate[cover]': '*',
        'populate[avatar]': '*',
      },
    });
    if (isValidGetClubsResponse(data)) {
      return {
        data: data.data,
        meta: data.meta,
      };
    } else throw '';
  } catch (e) {
    console.error('STRAPI: GetClubs:', e);
    return {
      data: null,
      meta: null,
    };
  }
}

export type IGetClubsReturn = IStrapiReturn<IClub[]>;
