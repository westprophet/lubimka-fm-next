import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../src/api';
import PostPage from '@pages/PostPage';

const TermsAndConditions: NextPage<ITermsAndConditionsProps> = ({ content, title }) => {
  return <PostPage title={title}>{content}</PostPage>;
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const content = await api.strapi.single.getTermsAndConditions();
  const title = 'Конфиденциальность информации пользователей';
  return {
    props: {
      title,
      content,
    },
  };
};

interface ITermsAndConditionsProps {
  content: any;
  title: string;
}

export default TermsAndConditions;
