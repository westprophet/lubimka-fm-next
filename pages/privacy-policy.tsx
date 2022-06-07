import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import api from '../src/api';
import PostPage from '@pages/PostPage';

const PrivacyPolicy: NextPage<IPrivacyPolicyProps> = ({ content, title }) => {
  return <PostPage title={title}>{content}</PostPage>;
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await api.strapi.single.getPrivacyPolicy();
  const title = 'Соглашение об использовании Cookies';
  return {
    props: {
      title,
      content,
    },
  };
};

interface IPrivacyPolicyProps {
  content: any;
  title: string;
}

export default PrivacyPolicy;
