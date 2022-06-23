import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../../src/api';
import { IClub, IEvent } from 'src/interfaces';
import ClubPage from '../../../src/pages/ClubPage';
import getGlobalStaticProps, {
  IGetGlobalStaticProps,
} from '../../../functions/getGlobalStaticProps';
// import ClubsPage from '../../../src/pages/ClubsPage';

const ClubDetail: NextPage<IClubDetailProps> = ({ club, nearbyEvents, recomendedEvents }) => {
  return <ClubPage club={club} nearbyEvents={nearbyEvents} recomendedEvents={recomendedEvents} />;
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const club = await api.strapi.clubs.getClub({
    id: context.params?.id,
    withRecomendedEvents: true,
  });

  //Ближайшие мироприятия этого клуба
  const { data: nearbyEvents } = await api.strapi.events.getNearbyEvents(club?.id);
  let recomendedEvents = null;
  if (club?.attributes.recomendedEvents) recomendedEvents = club?.attributes.recomendedEvents?.data;
  return await getGlobalStaticProps({
    props: {
      club,
      nearbyEvents,
      recomendedEvents,
    },
  });
};

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async () => {
  const { data: clubs } = await api.strapi.clubs.getClubs();

  const paths = clubs?.map((c: IClub) => ({
    params: { id: String(c.id) },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface IClubDetailProps extends IGetGlobalStaticProps {
  club: IClub;
  nearbyEvents: IEvent[] | null;
  recomendedEvents: IEvent[] | null;
}

export default ClubDetail;
