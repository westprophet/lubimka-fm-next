//Формируем параметры для запроса на основе переданных аргументов
import { IGetPartnersRequestParams } from '../types';

export default function getParamsObject(p: IGetPartnersRequestParams | null | undefined) {
  return {
    sort: p?.sort ?? ['name:asc'],
    populate: {
      avatar: {
        fields: ['url'],
      },
    },
  };
}
