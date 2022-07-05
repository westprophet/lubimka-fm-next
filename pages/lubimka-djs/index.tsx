import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../src/api';
import LubimkaDJsPage from '../../src/pages/LubimkaDJsPage';
import { IStrapiRequestPagination } from 'api/strapi/types/IStrapiRequestBaseParams';
import { IGetAuthorsReturn } from 'api/strapi/routes/authors/getAuthors/getAuthors';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../../functions/getGlobalStaticProps';

const Authors: NextPage<IAuthorsProps> = ({ authors }) => {
  return <LubimkaDJsPage authors={authors} />;
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const initialPagination: IStrapiRequestPagination = {
    page: 1,
    pageSize: 50,
  };

  const authors = await api.strapi.authors.getAuthors({ pagination: initialPagination });
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAL']),
    props: {
      authors,
    },
  });
};

interface IAuthorsProps extends IGetGlobalStaticProps {
  authors: IGetAuthorsReturn;
}

export default Authors;
