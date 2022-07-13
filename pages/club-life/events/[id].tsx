import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../../src/api';
import { IClub, IEvent } from 'src/interfaces';
import EventPage from '../../../src/pages/EventPage';
import getGlobalStaticProps, { IGetGlobalStaticProps } from 'functions/getGlobalStaticProps';
import { NextSeo } from 'next-seo';
import React from 'react';

const EventDetail: NextPage<IEventDetailProps> = ({ event, club }) => {
  return (
    <>
      <NextSeo title={event.attributes.title} description={event.attributes.description} />
      <EventPage event={event} club={club} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const id = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;

  const event = await api.strapi.events.getEvent({
    id: String(id),
  });
  const club = event?.attributes.club?.data;
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAL']),
    props: {
      event,
      club,
    },
  });
};

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  const { data: clubs } = await api.strapi.events.getEvents();
  const paths = clubs?.map((e: IEvent) => ({
    params: { id: String(e.id) },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface IEventDetailProps extends IGetGlobalStaticProps {
  event: IEvent;
  club: IClub;
}

export default EventDetail;
