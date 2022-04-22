/***
 Параметры для вытаскивания вложенности документация
 https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields

 * Created by westp on 22.04.2022
 */

import StrapiAxios from '../../../global';
import IStrapiReturn from '../../../types/IStrapiReturn';
// import isValidGetPartnersResponse from './validators/isValidGetPartnersResponse';
import { IGetPartnersResponse } from './types/IGetPartnersResponse';
import { IGetPartnersRequestParams } from './types/IGetPartnersRequestParams';
import { IPartner } from '../../../../../interfaces';

//Получить партнеров
export default async function getPartners(
  p?: IGetPartnersRequestParams
): Promise<IGetPartnersReturn> {
  try {
    const { data }: { data: IGetPartnersResponse } = await StrapiAxios.get(`/partners`, {
      params: {
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
      },
    });
    return {
      data: data.data,
      meta: data.meta,
    };
  } catch (e) {
    console.error('STRAPI: GetPartners:', e);
    return {
      data: null,
      meta: null,
    };
  }
}

export type IGetPartnersReturn = IStrapiReturn<IPartner[]>;
