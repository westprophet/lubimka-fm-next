import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../src/api';
import PostPage from '@pages/PostPage';

const PrivacyPolicy: NextPage<IPrivacyPolicyProps> = ({ content, title }) => {
  return <PostPage title={title}>{content}</PostPage>;
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { data: team } = await api.strapi.team.getTeamMembers();
  return {
    props: {
      // channels,
      team,
    },
  };
};

interface IPrivacyPolicyProps {
  content: any;
  title: string;
}

export default PrivacyPolicy;
