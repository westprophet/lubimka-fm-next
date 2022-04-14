/**
 * Created by westp on 12.04.2022
 */

import StrapiAxios from '../../../global';
import IStrapiReturn from '../../../types/IStrapiReturn';
import isValidGetEventsResponse from './validators/isValidGetEventsResponse';
import { IGetEventsResponse } from './types/IGetEventsResponse';
import { IEvent } from '../../../../../interfaces';

export default async function getEvents(): Promise<IGetEventsReturn> {
  try {
    const { data }: { data: IGetEventsResponse } = await StrapiAxios.get('/events', {
      params: {
        'populate[avatar]': '*',
      },
    });
    if (isValidGetEventsResponse(data)) {
      return {
        data: data.data,
        meta: data.meta,
      };
    } else throw '';
  } catch (e) {
    console.error('STRAPI: GetEvents:', e);
    return {
      data: null,
      meta: null,
    };
  }
}

export type IGetEventsReturn = IStrapiReturn<IEvent[]>;
