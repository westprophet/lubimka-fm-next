import { IGetPostsRequestParams } from '../types';

/***
 *
 *   https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html
 *   Формируем параметры для запроса на основе переданных аргументов
 */

export default function getParamsObject(p?: IGetPostsRequestParams) {
  const obj: any = {
    sort: p?.sort ?? ['createdAt:asc'],
    filters: {
      $and: [],
    },
    fields: ['title', 'order', 'url', 'timeRead', 'createdAt'],
    populate: {
      cover: '*',
      authors: {
        populate: {
          avatar: '*',
        },
      },
    },
  };
  if (p?.categoryId)
    obj.filters['$and'].push({
      category: {
        id: { $eq: p.categoryId },
      },
    });
  if (p?.search) obj.filters['$and'].push({ title: { $containsi: p.search } });
  if (p?.pagination) obj.pagination = p.pagination;
  return obj;
}
