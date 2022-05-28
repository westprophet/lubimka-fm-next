import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../../src/api';

import { IChannel } from 'src/interfaces';

const Channels: NextPage<IChannelProps> = ({ channel }) => {
  return (
    <div>
      <div>
        <a href={`/broadcast/${channel.id}/order/`}>{channel.attributes.title}</a>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<IChannelPageParams>) => {
  const id = params ? params['channel'] : 0; //Получаем id
  const channel = await api.strapi.channels.getChannel(id);
  if (!channel)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  return {
    props: {
      channel,
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
type IChannelPageParams = {
  channel: string;
};

interface IChannelProps {
  channel: IChannel;
}

export default Channels;
