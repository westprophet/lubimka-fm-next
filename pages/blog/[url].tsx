import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../src/api';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../../functions/getGlobalStaticProps';
import { IPost } from 'interfaces/IPost';

const Blog: NextPage<IBlogProps> = ({ post }) => {
  return <div></div>;
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<IBlogParams>) => {
  const post = await api.strapi.posts.getPost({ url: params?.url });
  return await getGlobalStaticProps({
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
  post: IPost;
}

export default Blog;
