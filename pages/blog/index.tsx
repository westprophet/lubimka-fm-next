import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../src/api';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../../functions/getGlobalStaticProps';
import BlogPage from '@pages/BlogPage';
import { IBlogCategory } from 'interfaces/IBlogCategory';
import { IStrapiRequestPagination } from 'api/strapi/types/IStrapiRequestBaseParams';

const Blog: NextPage<IBlogProps> = ({ categories }) => {
  return <BlogPage categories={categories} />;
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const initialPaginationCategories: IStrapiRequestPagination = {
    page: 1,
    pageSize: 50,
  };
  const categories = await api.strapi.posts.getCategories({
    pagination: initialPaginationCategories,
  });
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAl']),
    props: {
      categories,
    },
  });
};

interface IBlogProps extends IGetGlobalStaticProps {
  categories: IBlogCategory[];
}

export default Blog;
