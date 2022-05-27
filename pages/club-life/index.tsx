import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../src/api';
import { IClub } from 'src/interfaces';
import ClubLifePage from '../../src/pages/ClubLifePage';

const ClubLife: NextPage<IClubLifeProps> = ({ clubs }) => {
  return <ClubLifePage clubs={clubs} />;
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { data: clubs } = await api.strapi.clubs.getClubs();
  return {
    props: {
      clubs,
    },
  };
};

interface IClubLifeProps {
  clubs: IClub[];
}

export default ClubLife;
