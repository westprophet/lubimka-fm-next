import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import api from '../../src/api';
import { IClub } from 'src/interfaces';
import ClubLifePage from '../../src/pages/ClubLifePage';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../../functions/getGlobalStaticProps';

const ClubLife: NextPage<IClubLifeProps> = ({ clubs }) => {
  return <ClubLifePage clubs={clubs} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: clubs } = await api.strapi.clubs.getClubs();
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAl']),
    props: {
      clubs,
    },
  });
};

interface IClubLifeProps extends IGetGlobalStaticProps {
  clubs: IClub[];
}

export default ClubLife;
