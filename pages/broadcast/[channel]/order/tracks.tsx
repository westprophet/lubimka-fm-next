import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next/types';
import api from 'api/index';
import { ITrackRadioheart } from 'interfaces/ITrackRadioheart';
import { IChannel } from 'interfaces/index';
import ListOrderPage from 'src/pages/ListOrderPage';
import getGlobalStaticProps, { IGetGlobalStaticProps } from 'functions/getGlobalStaticProps';
import { NextSeo } from 'next-seo';
import React from 'react';

const TrackList: NextPage<ITrackListProps> = ({ tracks, channel }) => {
  return (
    <>
      <NextSeo
        title={`Список треков для заказа:${channel.attributes.title}`}
        description={`Тут отображается список треков для заказа на канале: ${channel.attributes.title}`}
      />
      <ListOrderPage tracks={tracks} channel={channel} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ITrackListPageParams>) => {
  const id = params ? params['channel'] : 0; //Получаем id
  const channel = await api.strapi.channels.getChannel(id);
  if (!channel)
    return {
      notFound: true,
    };
  const tracks = await api.radio.tracks.getAllTrack({ c: channel ?? null });
  return await getGlobalStaticProps({
    revalidate: Number(process.env['NEXT_PUBLIC_REVALIDATE_INTERVAL']),
    props: {
      tracks,
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

//Получаемые по ссылке параметры страницы
type ITrackListPageParams = {
  channel: string;
};

interface ITrackListProps extends IGetGlobalStaticProps {
  tracks: ITrackRadioheart[];
  channel: IChannel;
}

export default TrackList;
