/**
 * Created by westp on 12.04.2022
 *
 *  Параметры для вытаскивания вложенности документация
 *  https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields
 */

import { IEvent } from 'interfaces/IEvent';
import { IStrapiReturn } from '../../types';
import api from '../../../index';

export default async function getNearbyEvents(
  clubId?: number | undefined
  // fromDate: string
): Promise<IGetLastEventsReturn> {
  if (!clubId)
    return {
      data: null,
      meta: null,
    };
  // const { default: moment } = await import('moment');
  const p: any = {
    // fromDate: moment().utc().format(),
  };
  if (clubId) p['byClub'] = clubId;
  return api.strapi.events.getEvents(p);
}

export type IGetLastEventsReturn = IStrapiReturn<IEvent[] | null>;
