/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 23.04.2022
 */

import StrapiAxios from '../../../global';
import IStrapiReturn from '../../../types/IStrapiReturn';
// import isValidGetTeamMembersResponse from './validators/isValidGetTeamMembersResponse';
import { IGetTeamMembersResponse, IGetPartnersRequestParams } from './types';
import { ITeamMember } from '../../../../../interfaces';
import getParamsObject from './utils/getParamsObject';

export default async function getTeamMembers(
  p?: IGetPartnersRequestParams | null
): Promise<IGetTeamMembersReturn> {
  try {
    const { data }: { data: IGetTeamMembersResponse } = await StrapiAxios.get('/team-members', {
      params: getParamsObject(p),
    });
    // if (isValidGetTeamMembersResponse(data)) {
    return {
      data: data.data,
      meta: data.meta,
    };
    // } else throw '';
  } catch (e) {
    console.error('STRAPI: GetTeamMembers:', e);
    return {
      data: null,
      meta: null,
    };
  }
}

export type IGetTeamMembersReturn = IStrapiReturn<ITeamMember[] | null>;
