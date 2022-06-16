// import { IGetChannelRequestParams } from '../types';
/***
  https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html
*/

export default function getParamsObject() {
  return {
    populate: {
      programs: {
        populate: {
          cover: '*',
          DaySchedule: '*',
        },
      },
      stream: '*',
      cover: {
        populate: '*',
      },
    },
  };
}
