import type { NextPage } from 'next';
import HomePage from '../src/pages/HomePage';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../src/api';
import { IAuthor, IClub, IEvent } from 'src/interfaces';

const Home: NextPage<IHomeProps> = ({ events, clubs, authors }) => {
  return <HomePage events={events} clubs={clubs} authors={authors} />;
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { data: events } = await api.strapi.events.getEvents();
  const { data: clubs } = await api.strapi.clubs.getClubs();
  const { data: authors } = await api.strapi.authors.getAuthors();
  const channels = await api.strapi.channels.getChannels();
  return {
    props: {
      events,
      clubs,
      authors,
      channels,
    },
  };
};

interface IHomeProps {
  events: IEvent[];
  clubs: IClub[];
  authors: IAuthor[];
}

export default Home;
