import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../src/api';
import { IChannel } from 'src/interfaces';
import ChannelsPage from '../../src/pages/ChannelsPage';

const Channels: NextPage<IChannelsProps> = ({ channels }) => {
  return <ChannelsPage channels={channels} />;
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const channels = await api.strapi.channels.getChannels();
  return {
    props: {
      channels,
    },
  };
};

interface IChannelsProps {
  channels: IChannel[];
}

export default Channels;