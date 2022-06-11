/**
 * Created by westp on 11.06.2022
 */

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
import useLastTracks from 'hooks/channel/lastTracks/useLastTracks';
import useGetNextTrack from 'hooks/channel/useGetNextTrack';
import VerticalTrackRadioheart from 'components/tracks/VerticalTrackRadioheart';

export default function BroadcastPage({ channel, newTracks }: IBroadcastPageProps) {
  const [active, setActive] = useState<'news' | 'history' | null>(null);
  const onClose = () => setActive(null);
  const channelCover = getImageUrl(channel.attributes.cover);
  const stream = useGetStaticChannelStream(channel);
  const title: TAudioTitle | null = getTitle(stream.data);
  const channelTitle = channel.attributes.title;
  const isCurrentChannel = stream.isCurrentChannel;
  const radioPrograms = channel.attributes.programs.data;
  const { image } = useImageState(title); // Запрашиваем картинку для трека
  const lastTracks = useLastTracks(channel, title);
  const { data: nextTrack } = useGetNextTrack(channel, title);
  return (
    <DL.Layout
      className={cn(s.BroadcastPage)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DL.DoubleSection.Wrapper>
        <DL.DoubleSection.Preview.Wrapper className={cn(s.preview)} cover={image ?? channelCover}>
          {/*<DL.PageTitle>Эфир канала {channelTitle}</DL.PageTitle>*/}
          <DL.DoubleSection.Preview.Inner className={cn(s.previewInner)}>
            <h1 className={cn('fire-text-effect')}>{channelTitle}</h1>
            <div className={cn(s.now)}>
              <div className={cn(s.name)}>{title?.title}</div>
              <div className={cn(s.atrist)}>{title?.artist}</div>
            </div>
            <BroadcastPlayer isCurrentChannel={isCurrentChannel} channel={channel} />
          </DL.DoubleSection.Preview.Inner>
        </DL.DoubleSection.Preview.Wrapper>
        <DL.DoubleSection.QuadContent.Wrapper className={cn(s.content)}>
          {nextTrack && (
            <DL.DoubleSection.QuadContent.Container
              title={nextTrack ? 'Рекомендуем' : 'Новый трек'}
              colorType={1}
              className={cn(s.nextTrackContainer)}
            >
              <DL.DoubleSection.QuadContent.Inner className={cn(s.nextTrackInner)}>
                <VerticalTrackRadioheart track={nextTrack} className={cn(s.nextTrack)} />
              </DL.DoubleSection.QuadContent.Inner>
            </DL.DoubleSection.QuadContent.Container>
          )}
          <NewTracksSection
            tracks={newTracks}
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
  newTracks: ITrackRadioheartNew[] | null;
}
