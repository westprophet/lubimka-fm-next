import { IGetEventsRequestParams } from '../types/IGetEventsRequestParams';
/***
//Формируем параметры для запроса на основе переданных аргументов
 Фильтрация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html
*/
export default function getParamsObject(p: IGetEventsRequestParams | undefined) {
  const obj: any = {
    sort: p?.sort ?? ['title:asc'],
    filters: {
      $and: [],
    },
    populate: {
      preview: {
        fields: ['url'],
      },
    },
  };
  if (p?.search) obj.filters['$and'].push({ title: { $containsi: p.search } });
  if (p?.byClub) obj.filters['$and'].push({ club: { id: { $eq: p.byClub } } });
  if (p?.fromDate) obj.filters['$and'].push({ startDate: { $gte: p.fromDate } });
  if (p?.toDate) obj.filters['$and'].push({ startDate: { $lte: p.toDate } });
  if (p?.pagination) obj.pagination = p.pagination;

  return obj;
}
