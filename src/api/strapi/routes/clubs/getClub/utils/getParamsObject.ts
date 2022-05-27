import { IGetClubRequestParams } from '../types/IGetClubRequestParams';

/***
 //Формируем параметры для запроса на основе переданных аргументов
 Фильтрация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html
 */
export default function getParamsObject(p: IGetClubRequestParams | undefined) {
  const obj: any = {
    populate: {
      avatar: {
        fields: ['url'],
      },
      cover: {
        fields: ['url'],
      },
      Emails: '*',
      PhoneNumbers: '*',
      Socials: {
        populate: {
          icon: {
            populate: '*',
          },
        },
      },
      recomendedEvents: p?.withRecomendedEvents
        ? {
            populate: '*',
          }
        : null,
    },
  };

  // if (p?.search) obj.filters['$and'].push({ title: { $containsi: p.search } });

  return obj;
}
