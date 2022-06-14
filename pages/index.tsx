import type { NextPage } from 'next';
import HomePage from '../src/pages/HomePage';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../src/api';
import { IAuthor, IChannel, IClub, IEvent, IPartner } from 'src/interfaces';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../functions/getGlobalStaticProps';

const Home: NextPage<IHomeProps> = ({ events, clubs, authors, partners, channels }) => {
  return (
    <HomePage
      events={events}
      clubs={clubs}
      authors={authors}
      partners={partners}
      channels={channels}
    />
  );
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { data: events } = await api.strapi.events.getEvents();
  const { data: clubs } = await api.strapi.clubs.getClubs();
  const { data: authors } = await api.strapi.authors.getAuthors();
  const { data: partners } = await api.strapi.partners.getPartners();
  // const channels = await api.strapi.channels.getChannels();
  return await getGlobalStaticProps({
    props: {
      events,
      clubs,
      authors,
      // channels,
      partners,
    },
  });
};

interface IHomeProps extends IGetGlobalStaticProps {
  events: IEvent[];
  clubs: IClub[];
  authors: IAuthor[];
  partners: IPartner[];
  channels: IChannel[];
}

export default Home;
