import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import api from '../../src/api';
// import { IClub } from 'src/interfaces';
import ClubsNearbyPage from '../../src/pages/ClubsNearbyPage';
import getGlobalStaticProps from '../../functions/getGlobalStaticProps';

const ClubsNearby: NextPage = () => {
  return <ClubsNearbyPage />;
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

// interface IClubsNearbyProps extends IGetGlobalStaticProps {
//   clubs: IClub[];
// }

export default ClubsNearby;
