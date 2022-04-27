import { IGetPartnersRequestParams } from '../types/IGetPartnersRequestParams';

//Формируем параметры для запроса на основе переданных аргументов
export default function getParamsObject(p: IGetPartnersRequestParams | undefined) {
  return {
    sort: p?.sort ?? ['order:asc'],
    populate: {
      Emails: '*',
      PhoneNumbers: '*',
      Socials: {
        populate: {
          icon: {
            populate: '*',
          },
        },
      },
      avatar: {
        fields: ['url'],
      },
      company: p?.withCompany
        ? {
            populate: {
              Emails: '*',
              PhoneNumbers: '*',
              Sites: '*',
              Socials: {
                populate: {
                  icon: {
                    populate: '*',
                  },
                },
              },
              logotype: {
                fields: ['url'],
              },
            },
          }
        : undefined,
    },
  };
}
