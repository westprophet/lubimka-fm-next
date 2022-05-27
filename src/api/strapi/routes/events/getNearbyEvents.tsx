/**
 * Created by westp on 12.04.2022
 *
 *  Параметры для вытаскивания вложенности документация
 *  https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html\#relation-media-fields
 */

import { IEvent } from '../../../../interfaces';
import { IStrapiReturn } from '../../types';
import api from '../../../index';
import moment from 'moment';

export default async function getNearbyEvents(
  clubId: number | undefined,
  count = 10
): Promise<IGetLastEventsReturn> {
  if (!clubId)
    return {
      data: null,
      meta: null,
    };
  return api.strapi.events.getEvents({
    byClub: clubId,
    // pagination: { limit: count, start: 1 },
    fromDate: moment().utc().format(),
  });
}

export type IGetLastEventsReturn = IStrapiReturn<IEvent[]>;
