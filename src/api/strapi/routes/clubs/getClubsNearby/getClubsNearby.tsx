/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 25.07.2022
 */

import StrapiAxios from '../../../global';

import { IGetClubsNearbyResponse, IGetClubsNearbyRequestParams } from './types';
import { IClub } from 'interfaces/IClub';

export default async function getClubsNearby(
  p: IGetClubsNearbyRequestParams
): Promise<IGetClubsNearbyReturn> {
  try {
    const { data }: { data: IGetClubsNearbyResponse } = await StrapiAxios.get('/clubs/map', {
      params: p,
    });
    return data.data;
  } catch (e) {
    console.error('STRAPI: GetClubsNearby:', e);
    return null;
  }
}

export type IGetClubsNearbyReturn = IClub[] | null;
