import { IGetPostRequestParams } from '../types';

/***
 *
 *   https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html
 *   Формируем параметры для запроса на основе переданных аргументов
 */

export default function getParamsObject(p: IGetPostRequestParams) {
  const obj: any = {
    filters: {
      $and: [],
    },
    populate: {
      cover: '*',
      authors: {
        populate: {
          avatar: '*',
        },
      },
    },
  };
  if (p?.url) obj.filters['$and'].push({ url: { $eq: p.url } });
  if (p?.id) obj.filters['$and'].push({ id: { $eq: p.id } });
  return obj;
}
