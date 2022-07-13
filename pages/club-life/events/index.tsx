import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import api from '../../../src/api';
import EventsPage from '../../../src/pages/EventsPage';
import { IGetEventsReturn } from 'api/strapi/routes/events/getEvents/getEvents';
import { IStrapiRequestPagination } from 'api/strapi/types/IStrapiRequestBaseParams';
import getGlobalStaticProps, { IGetGlobalStaticProps } from 'functions/getGlobalStaticProps';
import { NextSeo } from 'next-seo';
import React from 'react';

const Events: NextPage<IEventsProps> = ({ events }) => {
  return (
    <>
      <NextSeo title="Мероприятия" description={'Мероприятия на Lubimka.FM'} />
      <EventsPage events={events} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const initialPagination: IStrapiRequestPagination = {
    page: 1,
    pageSize: 50,
  };

  const events = await api.strapi.events.getEvents({ pagination: initialPagination });
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAL']),
    props: {
      events,
    },
  });
};

interface IEventsProps extends IGetGlobalStaticProps {
  events: IGetEventsReturn;
}

export default Events;
