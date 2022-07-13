import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import getGlobalStaticProps from 'functions/getGlobalStaticProps';
import { NextSeo } from 'next-seo';
import React from 'react';
import SupportOrderPage from '@pages/SupportOrderPage';

const SupportOrder: NextPage = () => {
  return (
    <>
      <NextSeo title="Заявка на исправление ошибки" description={'Заявка на исправление ошибки'} />
      <SupportOrderPage />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return await getGlobalStaticProps();
};

export default SupportOrder;
