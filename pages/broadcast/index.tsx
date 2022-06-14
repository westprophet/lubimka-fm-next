import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { useContext } from 'react';
import { RadioPlayerContext } from '../../src/contexts/RadioPlayerManager';
import BroadcastPage from '@pages/BroadcastPage';
import getGlobalStaticProps, { IGetGlobalStaticProps } from '../../functions/getGlobalStaticProps';

const Channels: NextPage<IChannelsPageProps> = () => {
  const rm = useContext(RadioPlayerContext);
  if (!rm.channel) return null;

  return <BroadcastPage channel={rm.channel} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return await getGlobalStaticProps();
};

type IChannelsPageProps = IGetGlobalStaticProps;

export default Channels;
