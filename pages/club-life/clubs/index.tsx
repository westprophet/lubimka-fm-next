import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import api from '../../../src/api';
import { IClub } from 'src/interfaces';
import ClubsPage from '../../../src/pages/ClubsPage';
import getGlobalStaticProps, { IGetGlobalStaticProps } from 'functions/getGlobalStaticProps';

const Clubs: NextPage<IChannelsProps> = ({ clubs }) => {
  return <ClubsPage clubs={clubs} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: clubs } = await api.strapi.clubs.getClubs();
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAL']),
    props: {
      clubs,
    },
  });
};

interface IChannelsProps extends IGetGlobalStaticProps {
  clubs: IClub[];
}

export default Clubs;
