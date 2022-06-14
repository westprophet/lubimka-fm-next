import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../../src/api';

import { IChannel } from 'src/interfaces';
import BroadcastPage from '@pages/BroadcastPage';
import { ITrackRadioheartNew } from 'interfaces/ITrackRadioheart';
import getGlobalStaticProps, {
  IGetGlobalStaticProps,
} from '../../../functions/getGlobalStaticProps';

const Channel: NextPage<IChannelProps> = ({ channel, newTracks }) => {
  return <BroadcastPage channel={channel} newTracks={newTracks} />;
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<IChannelPageParams>) => {
  const id = params ? params['channel'] : 0; //Получаем id
  const channel = await api.strapi.channels.getChannel(id);
  const newTracks = channel
    ? await api.radio.tracks.getNewTracks({ c: channel, count: 100 })
    : null;
  if (!channel)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  return await getGlobalStaticProps({
    props: {
      channel,
      newTracks,
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

//Получаемые по ссылке параметры страницы
type IChannelPageParams = {
  channel: string;
};

interface IChannelProps extends IGetGlobalStaticProps {
  channel: IChannel;
  newTracks: ITrackRadioheartNew[] | null;
}

export default Channel;
