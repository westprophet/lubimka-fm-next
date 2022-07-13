import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../src/api';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../../functions/getGlobalStaticProps';
import { IPost, IPostDetail } from 'interfaces/IPost';
import PostAltPage from '@pages/PostAltPage';
import { NextSeo } from 'next-seo';
import React from 'react';

const Blog: NextPage<IBlogProps> = ({ post }) => {
  return (
    <>
      <NextSeo title={post.attributes.title} description={post.attributes.content.slice(0, 100)} />
      <PostAltPage post={post} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<IBlogParams>) => {
  const post = await api.strapi.posts.getPost({ url: params?.url });
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAL']),
    props: {
      post,
    },
  });
};

//https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
export async function getStaticPaths() {
  const { data: posts } = await api.strapi.posts.getPosts(); //Запрашиваем данные о канале
  const paths = posts?.map((p: IPost) => ({
    params: { url: String(p.attributes.url) },
  }));
  return { paths, fallback: false };
}

type IBlogParams = {
  url: string;
};

//Данные внутренней страницы
interface IBlogProps extends IGetGlobalStaticProps {
  post: IPostDetail;
}

export default Blog;
