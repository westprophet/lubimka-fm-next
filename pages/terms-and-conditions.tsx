import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import api from '../src/api';
import PostPage from '@pages/PostPage';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../functions/getGlobalStaticProps';

const TermsAndConditions: NextPage<ITermsAndConditionsProps> = ({ content, title }) => {
  return <PostPage title={title}>{content}</PostPage>;
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await api.strapi.single.getTermsAndConditions();
  const title = 'Конфиденциальность информации пользователей';
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAL']),
    props: {
      title,
      content,
    },
  });
};

interface ITermsAndConditionsProps extends IGetGlobalStaticProps {
  content: any;
  title: string;
}

export default TermsAndConditions;
