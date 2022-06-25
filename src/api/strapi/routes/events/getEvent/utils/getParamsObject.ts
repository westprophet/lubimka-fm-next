import { IGetEventRequestParams } from '../types/IGetEventRequestParams';
/***
//Формируем параметры для запроса на основе переданных аргументов
 Фильтрация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html
*/
export default function getParamsObject(p: IGetEventRequestParams | undefined) {
  const obj: any = {
    sort: p?.sort ?? ['title:asc'],
    populate: {
      club: {
        populate: {
          cover: '*',
          avatar: '*',
          Emails: '*',
          PhoneNumbers: '*',
          Socials: {
            populate: {
              icon: {
                populate: '*',
              },
            },
          },
        },
      },
      // preview: {
      //   fields: ['url'],
      // },
    },
  };

  return obj;
}
