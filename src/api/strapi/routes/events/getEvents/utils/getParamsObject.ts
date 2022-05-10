import { IGetEventsRequestParams } from '../types/IGetEventsRequestParams';
/***
//Формируем параметры для запроса на основе переданных аргументов
 Фильтрация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html
*/
export default function getParamsObject(p: IGetEventsRequestParams | undefined) {
  const obj: any = {
    sort: p?.sort ?? ['title:asc'],
    populate: {
      preview: {
        fields: ['url'],
      },
    },
  };

  if (p?.fromDate) obj.filters['$gte'] = p?.fromDate;
  if (p?.toDate) obj.filters['$lte'] = p?.toDate;

  if (p?.pagination) obj.pagination = p.pagination;

  return obj;
}
