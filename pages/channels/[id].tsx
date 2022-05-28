import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../src/api';
import { IChannel } from 'src/interfaces';
import ChannelPage from '../../src/pages/ChannelPage';

//Подробнее о канале
const Channel: NextPage<IChannelPageProps> = ({ channel }) => {
  return <ChannelPage channel={channel} />;
};

//https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
export async function getStaticPaths() {
  const channels = await api.strapi.channels.getChannels(); //Запрашиваем данные о канале
  const paths = channels.map((channel: IChannel) => ({
    params: { id: String(channel.id) },
  }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<IChannelPageParams>) => {
  const id = params ? params['id'] : 0; //Получаем id
  let channel: IChannel | false = false;

  if (id) channel = await api.strapi.channels.getChannel(id);
  if (!channel)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  else
    return {
      props: {
        channel,
      },
    };
};

//Данные внутренней страницы
interface IChannelPageProps {
  channel: IChannel;
}

//Получаемые по ссылке параметры страницы
type IChannelPageParams = {
  id: string;
};

export default Channel;
