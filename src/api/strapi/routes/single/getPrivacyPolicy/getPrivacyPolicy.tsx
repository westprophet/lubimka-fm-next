/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 22.04.2022
 */

import StrapiAxios from '../../../global';
import { IStrapiReturn } from 'api/strapi/types';
import TStrapiResponseContainer from '../../../types/TStrapiResponseContainer';

//Получить партнеров
export default async function getPrivacyPolicy(): Promise<IGetPrivacyPolicyReturn> {
  try {
    const { data }: { data: IGetPrivacyPolicyResponse } = await StrapiAxios.get(`/privacy-policy`);
    return data.data.attributes.content;
  } catch (e) {
    console.error('STRAPI: getPrivacyPolicy:', e);
    return '';
  }
}

export type IGetPrivacyPolicyResponse = IStrapiReturn<
  TStrapiResponseContainer<{ content: string }>
>;

export type IGetPrivacyPolicyReturn = string;
