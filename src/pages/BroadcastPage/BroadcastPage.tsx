/**
 * Created by westp on 11.06.2022
 */
// suppressHydrationWarning: true,
import React, { useState } from 'react';
import s from './BroadcastPage.module.scss';
import cn from 'classnames';
import { IChannel } from '../../interfaces';
import DL from 'layouts/DefaultLayout';
import { getImageUrl } from '@tools/IWrappedStrapiImage';
import { useGetStaticChannelStream } from 'src/contexts/RadioPlayerManager';
import TAudioTitle from '../../types/TAudioTitle';
import getTitle from '@tools/IRadioHearthStreamData/getTitle';

import BroadcastPlayer from '@pages/BroadcastPage/sections/BroadcastPlayer';
import NewTracksSection from '@pages/BroadcastPage/sections/NewTracksSection';
import useImageState from 'hooks/useImageState';
import { ITrackRadioheartNew } from 'interfaces/ITrackRadioheart';
import LastTracksSection from '@pages/BroadcastPage/sections/LastTracksSection';
import useLastTracks from 'hooks/channel/useLastTracks';
import useGetNextTrack from 'hooks/channel/useGetNextTrack';
import NextTrackSection from '@pages/BroadcastPage/sections/NextTrackSection';
import useGetNewTracks from 'hooks/channel/useGetNewTracks';
import DynamicChannelTitle from 'components/DynamicChannelTitle';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../constants/DATA_FOR_BLUR';

export default function BroadcastPage({ channel, newTracks }: IBroadcastPageProps) {
  const [active, setActive] = useState<'news' | 'history' | null>(null);
  const onClose = () => setActive(null);

  const stream = useGetStaticChannelStream(channel); //Подтягиваем данные о канале статически
  const isCurrentChannel = stream.isCurrentChannel;

  // const channelTitle = channel.attributes.title;
  const channelCover = getImageUrl(channel.attributes.cover);
  const title: TAudioTitle | null = getTitle(stream.data);

  const radioPrograms = channel.attributes.programs.data;

  const { image } = useImageState(title); // Запрашиваем картинку для трека
  const cover = image ?? channelCover;

  const { data: lastTracks } = useLastTracks({ c: channel, title });
  const { data: nextTrack } = useGetNextTrack({ c: channel, title });
  const { data: _newTracks } = useGetNewTracks({ c: channel, initialTracks: newTracks });
  return (
    <DL.Layout
      className={cn(s.BroadcastPage)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DL.DoubleSection.Wrapper>
        <DL.DoubleSection.Preview.Wrapper className={cn(s.preview)}>
          <div
            className={cn(s.cover)}
            style={{
              backgroundImage: `url("${cover}")`,
            }}
          ></div>
          <DL.DoubleSection.Preview.Inner className={cn(s.previewInner)}>
            <DynamicChannelTitle className={cn(s.title)} channel={channel} />
            <div className={cn(s.now)}>
              <div className={cn(s.name)}>{title?.title}</div>
              <div className={cn(s.artist)}>{title?.artist}</div>
            </div>
            <BroadcastPlayer isCurrentChannel={isCurrentChannel} channel={channel} />
          </DL.DoubleSection.Preview.Inner>
        </DL.DoubleSection.Preview.Wrapper>
        <DL.DoubleSection.QuadContent.Wrapper>
          <NextTrackSection track={nextTrack} />
          <NewTracksSection
            tracks={_newTracks}
            isShowDetail={active === 'news'}
            onOpen={() => setActive('news')}
            onClose={onClose}
          />
          <LastTracksSection
            tracks={lastTracks}
            isShowDetail={active === 'history'}
            onOpen={() => setActive('history')}
            onClose={onClose}
          />
        </DL.DoubleSection.QuadContent.Wrapper>
      </DL.DoubleSection.Wrapper>
    </DL.Layout>
  );
}

interface IBroadcastPageProps {
  channel: IChannel;
  newTracks?: ITrackRadioheartNew[] | null;
}
