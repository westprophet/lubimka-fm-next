import { useQuery } from 'react-query';
import api from '../../../api';
import { IGetEventsReturn } from 'api/strapi/routes/events/getEvents/getEvents';

export default function useGetEvents(
  search: string,
  fromDate: string,
  toDate: string,
  initialData: IGetEventsReturn,
  page: number,
  pageSize = 50
) {
  return useQuery<IGetEventsReturn>(
    ['getEventsPages', search, fromDate, toDate, page, pageSize],
    async () => {
      const { default: moment } = await import('moment');
      return await api.strapi.events.getEvents({
        search,
        fromDate: fromDate ?? moment().utc().format(),
        toDate,
        pagination: {
          page: page,
          pageSize: pageSize,
        },
      });
    },
    {
      initialData,
      retryDelay: 1000,
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
    }
  );
}
