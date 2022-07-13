import type { NextPage } from 'next';
import ErrorPage from '@pages/ErrorPage';
import { getStaticProps } from '../functions/getGlobalStaticProps';
import { NextSeo } from 'next-seo';
import React from 'react';

const Error500: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Внутренняя ошибка сервиса"
        description="Страница которая отображает код ошибки"
      />
      <ErrorPage code={500} title="Internal Server Error" />
    </>
  );
};
export { getStaticProps };

export default Error500;
