import { IGetCategoriesRequestParams } from '../types';

/***
 *
 *   https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html
 *   Формируем параметры для запроса на основе переданных аргументов
 */

export default function getParamsObject(p: IGetCategoriesRequestParams) {
  return {
    sort: 'order:asc',

    fields: ['order', 'title'],
    populate: {
      cover: '*',
    },
  };
}
