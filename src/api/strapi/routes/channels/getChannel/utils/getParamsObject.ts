// import { IGetChannelRequestParams } from '../types';
/***
  https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html
*/

export default function getParamsObject() {
  return {
    populate: {
      stream: '*',
      programs: {
        populate: {
          cover: '*',
          DaySchedule: '*',
        },
      },
      Socials: {
        populate: {
          icon: {
            populate: '*',
          },
        },
      },
      cover: {
        fields: ['url'],
      },
    },
  };
}

//EXAMPLE
// return {
//    sort: p?.sort ?? ['order:asc'],
//    populate: {
//      avatar: {
//        fields: ['url'],
//      },
//    },
//  };
