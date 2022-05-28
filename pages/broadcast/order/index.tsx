import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from '../../../src/api';
import { ITrackRadioheart } from '../../../src/interfaces/ITrackRadioheart';

const Order: NextPage<IChannelsProps> = ({ tracks }) => {
  return <div></div>;
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
  tracks: ITrackRadioheart[];
}

export default Order;
