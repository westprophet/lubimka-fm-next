import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import api from '../../../src/api';
import { IClub } from 'src/interfaces';
import ClubsPage from '../../../src/pages/ClubsPage';
import getGlobalStaticProps, { IGetGlobalStaticProps } from 'functions/getGlobalStaticProps';
import { NextSeo } from 'next-seo';
import React from 'react';

const Clubs: NextPage<IChannelsProps> = ({ clubs }) => {
  return (
    <>
      <NextSeo title="Клубы" description={'Клубы на Lubimka.FM'} />
      <ClubsPage clubs={clubs} />
    </>
  );
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
