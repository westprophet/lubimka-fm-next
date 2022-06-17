import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import OrderAdvertisingPage from 'src/pages/OrderAdvertisingPage';
import getGlobalStaticProps from 'functions/getGlobalStaticProps';

const OrderAdvertising: NextPage = () => {
  return <OrderAdvertisingPage />;
};

export const getStaticProps: GetStaticProps = async () => {
  return await getGlobalStaticProps();
};

export default OrderAdvertising;
