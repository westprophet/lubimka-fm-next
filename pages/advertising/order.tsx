import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import OrderAdvertisingPage from 'src/pages/OrderAdvertisingPage';
import getGlobalStaticProps from 'functions/getGlobalStaticProps';
import { NextSeo } from 'next-seo';
import React from 'react';

const OrderAdvertising: NextPage = () => {
  return (
    <>
      <NextSeo title="Заказать рекламу" description={'Заказ рекламы на Lubimka.FM'} />
      <OrderAdvertisingPage />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return await getGlobalStaticProps();
};

export default OrderAdvertising;
