import { IGetAuthorRequestParams } from '../types/IGetAuthorRequestParams';
/***
 //Формируем параметры для запроса на основе переданных аргументов
 Фильтрация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html
 */
export default function getParamsObject(p: IGetAuthorRequestParams | undefined) {
  const obj: any = {
    populate: {
      avatar: {
        fields: ['url'],
      },
      SpotifyApi: {
        fields: ['uri', 'images'],
      },
      Socials: {
        populate: {
          icon: {
            populate: '*',
          },
        },
      },
      albums: {
        populate: {
          cover: '*',
          tracks: {
            populate: {
              cover: '*',
              source: '*',
            },
          },
          SpotifyApi: {
            fields: ['uri', 'images'],
          },
        },
      },
    },
  };
  return obj;
}
