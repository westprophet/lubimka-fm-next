import type { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next';
import { GetStaticPathsContext, GetStaticPropsContext } from 'next/types';
import api from '../../src/api';
import { IAuthor } from 'interfaces/IAuthor';
import AuthorPage from '@pages/AuthorPage';

const Authors: NextPage<IAuthorProps> = ({ author }) => {
  return <AuthorPage author={author} />;
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<IAuthorPageParams>) => {
  const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;
  const author = await api.strapi.authors.getAuthor({ id });
  if (!author)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  return {
    props: {
      author,
    },
  };
};

// @ts-ignore
export const getStaticPaths: GetStaticPaths = async (context: GetStaticPathsContext) => {
  const { data: authors } = await api.strapi.authors.getAuthors();
  const paths = authors?.map((a: IAuthor) => ({
    params: { id: String(a.id) },
  }));
  console.log(authors);
  return {
    paths,
    fallback: true,
  };
};

//Получаемые по ссылке параметры страницы
type IAuthorPageParams = {
  id: string;
};

interface IAuthorProps {
  author: IAuthor;
}

export default Authors;
