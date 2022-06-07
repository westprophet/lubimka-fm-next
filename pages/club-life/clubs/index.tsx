import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import api from '../../../src/api';
import { IClub } from 'src/interfaces';
import ClubsPage from '../../../src/pages/ClubsPage';

const Clubs: NextPage<IChannelsProps> = ({ clubs }) => {
  return <ClubsPage clubs={clubs} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: clubs } = await api.strapi.clubs.getClubs();
  return {
    props: {
      clubs,
    },
  };
};

interface IChannelsProps {
  clubs: IClub[];
}

export default Clubs;
