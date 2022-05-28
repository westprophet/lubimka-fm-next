import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../../../src/api';
import { ITrackRadioheart } from '../../../../src/interfaces/ITrackRadioheart';
import { IChannel } from '../../../../src/interfaces';
import ListOrderPage from '../../../../src/pages/ListOrderPage';

const Order: NextPage<IOrderProps> = ({ tracks }) => {
  return <ListOrderPage tracks={tracks} />;
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<IIOrderPageParams>) => {
  const id = params ? params['channel'] : 0; //Получаем id
  const channel = await api.strapi.channels.getChannel(id);
  if (!channel)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  const tracks = await api.radio.tracks.getAllTrack({ c: channel ?? null });
  return {
    props: {
      tracks,
    },
  };
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

interface IOrderProps {
  tracks: ITrackRadioheart[];
}

export default Order;
