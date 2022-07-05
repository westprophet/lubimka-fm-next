import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import api from '../../src/api';
import { IChannel } from 'src/interfaces';
import ChannelsPage from '../../src/pages/ChannelsPage';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../../functions/getGlobalStaticProps';

const Channels: NextPage<IChannelsProps> = ({ channels }) => {
  return <ChannelsPage channels={channels} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const channels = await api.strapi.channels.getChannels();
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAL']),
    props: {
      channels,
    },
  });
};

interface IChannelsProps extends IGetGlobalStaticProps {
  channels: IChannel[];
}

export default Channels;
