/**
 * Created by westp on 11.06.2022
 */
// suppressHydrationWarning: true,
import React, { useContext, useState } from 'react';
import s from './BroadcastPage.module.scss';
import cn from 'classnames';
import { IChannel, IRadioProgram } from '../../interfaces';
import DL, { IDefaultLayoutAttributes } from 'layouts/DefaultLayout';
import { getImageUrl } from '@tools/IWrappedStrapiImage';
import { RadioPlayerContext, useGetStaticChannelStream } from 'src/contexts/RadioPlayerManager';
import TAudioTitle from '../../types/TAudioTitle';

import BroadcastPlayer from 'components/BroadcastPlayer';
import NewTracksSection from '@pages/BroadcastPage/sections/NewTracksSection';
import useImageState from 'hooks/useImageState';
import { ITrackRadioheartNew } from 'interfaces/ITrackRadioheart';
import LastTracksSection from '@pages/BroadcastPage/sections/LastTracksSection';
import NextTrackSection from '@pages/BroadcastPage/sections/NextTrackSection';
import DynamicChannelTitle from 'components/DynamicChannelTitle';
import BroadcastNow from '@pages/BroadcastPage/components/BroadcastNow';
import RadioProgramsSection from '@pages/BroadcastPage/sections/RadioProgramsSection';
import useDynamicPageTitle from 'hooks/channel/useDynamicPageTitle';

export default function BroadcastPage({ channel, newTracks, radioPrograms }: IBroadcastPageProps) {
  const [active, setActive] = useState<'news' | 'history' | null>(null);
  const onClose = () => setActive(null);
  const { isLoadingChannels } = useContext(RadioPlayerContext);
  const stream = useGetStaticChannelStream(channel); //Подтягиваем данные о канале статически
  const channelCover = getImageUrl(channel.attributes.cover);
  const title: TAudioTitle | null = stream.current;
  const { image } = useImageState(title); // Запрашиваем картинку для трека
  const cover = image ?? channelCover;
  useDynamicPageTitle(channel, title); //Вставляем Заголовок документа
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
          />
          <DL.DoubleSection.Preview.Inner className={cn(s.previewInner)}>
            <DynamicChannelTitle className={cn(s.title)} channel={channel} />
            <BroadcastNow title={title} isLoading={isLoadingChannels || stream.isLoading} />
            <BroadcastPlayer channel={channel} />
          </DL.DoubleSection.Preview.Inner>
        </DL.DoubleSection.Preview.Wrapper>
        <DL.DoubleSection.QuadContent.Wrapper>
          <NextTrackSection channel={channel} title={title} />
          <NewTracksSection
            channel={channel}
            initialTracks={newTracks}
            isShowDetail={active === 'news'}
            onOpen={() => setActive('news')}
            onClose={onClose}
          />
          <LastTracksSection
            channel={channel}
            title={title}
            isShowDetail={active === 'history'}
            onOpen={() => setActive('history')}
            onClose={onClose}
          />
          <RadioProgramsSection channel={channel} programs={radioPrograms} />
        </DL.DoubleSection.QuadContent.Wrapper>
      </DL.DoubleSection.Wrapper>
    </DL.Layout>
  );
}

interface IBroadcastPageProps extends IDefaultLayoutAttributes {
  channel: IChannel;
  newTracks?: ITrackRadioheartNew[] | null;
  radioPrograms?: IRadioProgram[] | null;
}
