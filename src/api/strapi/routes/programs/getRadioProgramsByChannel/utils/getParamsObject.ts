import { IGetRadioProgramsByChannelRequestParams } from '../types';

/***
 *
 *   https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html
 *   Формируем параметры для запроса на основе переданных аргументов
 */

export default function getParamsObject(p: IGetRadioProgramsByChannelRequestParams) {
  return {
    filter: {
      channel: p.channelID,
    },
    populate: {
      DaySchedule: '*',
      cover: '*',
    },
  };
}
