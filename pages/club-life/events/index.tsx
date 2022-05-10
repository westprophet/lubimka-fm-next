import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../../src/api';
import { IEvent } from 'src/interfaces';
import EventsPage from '../../../src/pages/EventsPage';

const Events: NextPage<IEventsProps> = ({ events }) => {
  return <EventsPage events={events} />;
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { data: events } = await api.strapi.events.getEvents();
  return {
    props: {
      events,
    },
  };
};

interface IEventsProps {
  events: IEvent[];
}

export default Events;
