import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from 'src/api';
import { IChannel } from 'interfaces/IChannel';
import OrderTrackPage from '@pages/OrderTrackPage';
import getGlobalStaticProps, { IGetGlobalStaticProps } from 'functions/getGlobalStaticProps';

//Заказ трека
const Track: NextPage<ITrackProps> = ({ channel }) => {
  return <OrderTrackPage channel={channel} />;
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ITrackPageParams>) => {
  const id = params ? params['channel'] : 0; //Получаем id
  const channel = await api.strapi.channels.getChannel(id);
  if (!channel)
    return {
      notFound: true,
    };
  return await getGlobalStaticProps({
    props: {
      channel,
    },
  });
};

//https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
export async function getStaticPaths() {
  const channels = await api.strapi.channels.getChannels();
  const paths = channels.map((channel: IChannel) => ({
    params: { channel: String(channel.id) },
  }));
  return { paths, fallback: false };
}

interface ITrackProps extends IGetGlobalStaticProps {
  channel: IChannel;
}

//Получаемые по ссылке параметры страницы
type ITrackPageParams = {
  channel: string;
};

export default Track;
