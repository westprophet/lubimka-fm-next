/**
 * Created by westp on 27.04.2022
 */

import React from 'react';
import s from './ChannelPage.module.scss';
import cn from 'classnames';
import { IChannel } from '../../interfaces';

import DefaultLayout from '../../layouts/DefaultLayout';
import DSection from '../../layouts/DefaultLayout/components/DoubleSection';
import { getImageUrl } from '../../tools/IWrappedStrapiImage';
import ReactMarkdown from 'react-markdown';
import ChannelPlayer from './components/ChannelPlayer';
import TAudioTitle from '../../types/TAudioTitle';
import getTitle from '../../tools/IRadioHearthStreamData/getTitle';
import RadioProgramsSection from './sections/RadioProgramsSection';
import { useGetStaticChannelStream } from '../../contexts/RadioPlayerManager';
import TracksSection from './sections/TracksSection';

//Подробнее о канале
function ChannelPage({ className, channel }: IChannelPageProps) {
  const cover = getImageUrl(channel.attributes.cover);
  const stream = useGetStaticChannelStream(channel);
  //
  const isError = stream.status === 'error';
  //
  const title: TAudioTitle | null = getTitle(stream.data);
  // const title: TAudioTitle | null = null;

  // console.log('Render: ChannelPage');

  return (
    <DefaultLayout.Layout
      className={cn(s.ChannelPage, className)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DSection.Wrapper>
        <DSection.Preview.Wrapper cover={cover} className={cn(s.previewContainer)}>
          <DefaultLayout.PageTitle className={cn(s.title)}>
            {channel.attributes.title}
          </DefaultLayout.PageTitle>
          <DSection.Preview.Inner className={cn(s.player)}>
            <ChannelPlayer
              channel={channel}
              title={title}
              isError={isError}
              isCurrentChannel={stream.isCurrentChannel}
            />
          </DSection.Preview.Inner>
        </DSection.Preview.Wrapper>
        <DSection.Content.Wrapper>
          <DSection.Content.Container colorType={1} className={cn(s.description)} title="Описание">
            <ReactMarkdown>{channel.attributes.description}</ReactMarkdown>
          </DSection.Content.Container>
          <DSection.Content.Container title="Программы" colorType={2}>
            <RadioProgramsSection programs={channel.attributes.programs.data} />
          </DSection.Content.Container>
          <DSection.Content.Container title="История эфира" colorType={3}>
            <TracksSection channel={channel} title={title} />
          </DSection.Content.Container>
        </DSection.Content.Wrapper>
      </DSection.Wrapper>
    </DefaultLayout.Layout>
  );
}

export default React.memo(ChannelPage);

ChannelPage.defaultProps = {
  className: '',
};

interface IChannelPageProps {
  className?: string;
  channel: IChannel;
}
