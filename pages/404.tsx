import type { NextPage } from 'next';
import ErrorPage from '@pages/ErrorPage';

import { getStaticProps } from '../functions/getGlobalStaticProps';
import { NextSeo } from 'next-seo';
import React from 'react';

const Error404: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Страница не найдена что б её"
        description="Страница которая отображает код ошибки"
      />
      <ErrorPage code={404} title="Not found" />
    </>
  );
};

export { getStaticProps };

export default Error404;
