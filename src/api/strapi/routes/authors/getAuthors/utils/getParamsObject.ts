import { IGetAuthorsRequestParams } from '../types/IGetAuthorsRequestParams';
/***
 //Формируем параметры для запроса на основе переданных аргументов
 Фильтрация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html
 */
export default function getParamsObject(p: IGetAuthorsRequestParams | undefined) {
  const obj: any = {
    sort: p?.sort ?? ['name:asc'],
    filters: {
      $and: [],
    },
    populate: {
      SpotifyApi: {
        fields: ['uri', 'images'],
      },
      avatar: '*',
      Socials: {
        populate: {
          icon: {
            populate: '*',
          },
        },
      },
    },
  };
  if (p?.search) obj.filters['$and'].push({ name: { $containsi: p.search } });
  if (p?.pagination) obj.pagination = p.pagination;

  return obj;
}
