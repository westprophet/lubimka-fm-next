/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 22.04.2022
 */

import StrapiAxios from '../../../global';
import IStrapiReturn from '../../../types/IStrapiReturn';
import TStrapiResponseContainer from '../../../types/TStrapiResponseContainer';

//Получить партнеров
export default async function getTermsAndConditions(): Promise<IGetTermsAndConditionsReturn> {
  try {
    const { data }: { data: IGetTermsAndConditionsResponse } = await StrapiAxios.get(
      `/terms-and-condition`
    );
    return data.data.attributes.content;
  } catch (e) {
    console.error('STRAPI: getTermsAndConditions:', e);
    return '';
  }
}

export type IGetTermsAndConditionsResponse = IStrapiReturn<
  TStrapiResponseContainer<{ content: string }>
>;

export type IGetTermsAndConditionsReturn = string;
