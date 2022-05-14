import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../src/api';
import LubimkaDJsPage from '../../src/pages/LubimkaDJsPage';
import { IStrapiRequestPagination } from '../../src/api/strapi/types/IStrapiRequestBaseParams';
import { IGetAuthorsReturn } from '../../src/api/strapi/routes/authors/getAuthors/getAuthors';

const Authors: NextPage<IAuthorsProps> = ({ authors }) => {
  return <LubimkaDJsPage authors={authors} />;
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const initialPagination: IStrapiRequestPagination = {
    page: 1,
    pageSize: 50,
  };

  const authors = await api.strapi.authors.getAuthors({ pagination: initialPagination });
  return {
    props: {
      authors,
    },
  };
};

interface IAuthorsProps {
  authors: IGetAuthorsReturn;
}

export default Authors;
