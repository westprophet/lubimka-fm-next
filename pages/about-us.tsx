import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import api from '../src/api';
import { ITeamMember } from 'src/interfaces';
import AboutUsPage from '../src/pages/AboutUsPage';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../functions/getGlobalStaticProps';
import { NextSeo } from 'next-seo';
import React from 'react';

const AboutUs: NextPage<IAboutUsProps> = ({ team }) => {
  return (
    <>
      <NextSeo title="О нас" description="Описание нашей деятельности и команды Lubimka FM" />
      <AboutUsPage team={team} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: team } = await api.strapi.team.getTeamMembers();
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAL']),
    props: {
      team,
    },
  });
};

interface IAboutUsProps extends IGetGlobalStaticProps {
  team: ITeamMember[];
}

export default AboutUs;
