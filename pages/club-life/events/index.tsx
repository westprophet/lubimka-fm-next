import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../../src/api';
import EventsPage from '../../../src/pages/EventsPage';
import { IGetEventsReturn } from '../../../src/api/strapi/routes/events/getEvents/getEvents';
import { IStrapiRequestPagination } from '../../../src/api/strapi/types/IStrapiRequestBaseParams';

const Events: NextPage<IEventsProps> = ({ events }) => {
  return <EventsPage events={events} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const initialPagination: IStrapiRequestPagination = {
    page: 1,
    pageSize: 50,
  };

  const events = await api.strapi.events.getEvents({ pagination: initialPagination });
  return {
    props: {
      events,
    },
  };
};

interface IEventsProps {
  events: IGetEventsReturn;
}

export default Events;
