import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../src/api';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../../functions/getGlobalStaticProps';
import BlogPage from '@pages/BlogPage';
import { IBlogCategory } from 'interfaces/IBlogCategory';
import { IStrapiRequestPagination } from 'api/strapi/types/IStrapiRequestBaseParams';
import { NextSeo } from 'next-seo';
import React from 'react';

const Blog: NextPage<IBlogProps> = ({ categories }) => {
  return (
    <>
      <NextSeo title="Блог" description={'Блог на Lubimka.FM'} />
      <BlogPage categories={categories} />
    </>
  );
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
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAL']),
    props: {
      categories,
    },
  });
};

interface IBlogProps extends IGetGlobalStaticProps {
  categories: IBlogCategory[];
}

export default Blog;
