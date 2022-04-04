import ICompany from 'src/interfaces/ICompany';
import StrapiAxios from '../../../global';
import isValidGetCompaniesResponse from './validators/isValidGetCompaniesResponse';
import { TGetCompaniesResponse } from './types/IGetCompaniesResponse';
import normalizeGetCompanies from './utils/normalizeGetCompanies';
import IStrapiReturn from '../../../types/IStrapiReturn';

/***
Параметры для вытаскивания вложенности документация
https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html#relation-media-fields

Пример: {{server}}/api/companies?populate[Emails]=*&populate[Socials][populate][icon][populate]=*&populate[Phones]=*
 */
export default async function getCompanies(): Promise<IStrapiReturn<ICompany[]> | null> {
  try {
    const { data }: { data: TGetCompaniesResponse } = await StrapiAxios.get('/companies', {
      params: {
        'populate[Emails]': '*',
        'populate[Socials][populate][icon][populate]': '*',
        'populate[Phones]': '*',
      },
    });
    //Проверяем входящие данные
    if (isValidGetCompaniesResponse(data)) {
      return {
        data: data.data, //Делаем нормализацию
        meta: data.meta,
      };
    } else throw '';
  } catch (e) {
    console.error('STRAPI: getCompanies:', e);
    return null;
  }
}
