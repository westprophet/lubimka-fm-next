import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../../src/api';
import { IClub, IEvent } from 'src/interfaces';
import EventPage from '../../../src/pages/EventPage';

const EventDetail: NextPage<IEventDetailProps> = ({ event, club }) => {
  return <EventPage event={event} club={club} />;
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const id = Array.isArray(context.params?.id) ? context.params?.id[0] : context.params?.id;

  const event = await api.strapi.events.getEvent({
    id: String(id),
  });
  const club = event?.attributes.club?.data;
  return {
    props: {
      event,
      club,
    },
  };
};

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  const { data: clubs } = await api.strapi.events.getEvents();
  const paths = clubs?.map((e: IEvent) => ({
    params: { id: String(e.id) },
  }));
  return {
    paths,
    // fallback: true,
  };
};

interface IEventDetailProps {
  event: IEvent;
  club: IClub;
}

export default EventDetail;
