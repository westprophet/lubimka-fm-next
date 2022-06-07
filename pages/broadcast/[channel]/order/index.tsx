import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../../../src/api';
import { IChannel } from 'interfaces/IChannel';
// import ListOrderPage from '../../../../src/pages/ListOrderPage';

const Order: NextPage = () => {
  return null;
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<IIOrderPageParams>) => {
  const id = params ? params['channel'] : 0; //Получаем id
  const channel = await api.strapi.channels.getChannel(id);
  // if (!channel)
  return {
    notFound: true,
  };
  // return {
  //   redirect: {
  //     // destination: `/broadcast/${channel?.id}/order/tracks/`,
  //     destination: `/`,
  //     // permanent: false,
  //     statusCode: 301,
  //   },
  // };
};

//https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
export async function getStaticPaths() {
  const channels = await api.strapi.channels.getChannels();
  const paths = channels.map((channel: IChannel) => ({
    params: { channel: String(channel.id) },
  }));
  return { paths, fallback: false };
}

//Получаемые по ссылке параметры страницы
type IIOrderPageParams = {
  channel: string;
};

export default Order;
