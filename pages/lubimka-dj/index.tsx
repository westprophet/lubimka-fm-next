import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../src/api';
import { IAuthor } from 'src/interfaces';
import LubimkaDJsPage from '../../src/pages/LubimkaDJsPage';

const Authors: NextPage<IAuthorsProps> = ({ authors }) => {
  return <LubimkaDJsPage authors={authors} />;
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { data: authors } = await api.strapi.authors.getAuthors();
  return {
    props: {
      authors,
    },
  };
};

interface IAuthorsProps {
  authors: IAuthor[];
}

export default Authors;
