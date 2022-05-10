import { useQuery } from 'react-query';
import api from '../../../api';
import { IGetEventsReturn } from '../../../api/strapi/routes/events/getEvents/getEvents';

export default function useGetEvents(
  fromDate: string,
  toDate: string
): {
  isError: boolean;
  data: IGetEventsReturn | null;
} {
  const { isError, data } = useQuery(
    ['getEvents'],
    () => api.strapi.events.getEvents({ fromDate, toDate }),
    {
      retryDelay: 2000,
      // enabled: !!c && !!title,
      refetchOnWindowFocus: false,
    }
  );
  return {
    data: data ?? null,
    isError,
  };
}
