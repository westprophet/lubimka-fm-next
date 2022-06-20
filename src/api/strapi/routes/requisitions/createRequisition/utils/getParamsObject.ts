import { ICreateRequisitionRequestParams } from '../types';

/***
 *
 *   https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html
 *   Формируем параметры для запроса на основе переданных аргументов
 */

export default function getParamsObject(p: ICreateRequisitionRequestParams) {
  return {
    data: {
      email: p.email,
      phone: p.phone,
      name: p.name,
      address: p.address,
      message: p.message,
      type: p.type,
    },
  };
}
