/**
 * Created by westp on 27.04.2022
 */

import React, { useContext } from 'react';
import s from './ChannelPage.module.scss';
import cn from 'classnames';
import { IChannel, IRadioProgramm } from '../../interfaces';

import DefaultLayout from '../../layouts/DefaultLayout';
import DSection from '../../layouts/DefaultLayout/components/DoubleSection';
import { getImageUrl } from '../../tools/IWrappedStrapiImage';
import ReactMarkdown from 'react-markdown';
import RadioProgramm from 'components/RadioProgramm';
import ChannelPlayer from './components/ChannelPlayer';
import TracksSection from './sections/TracksSection';
import { RadioPlayerContext } from '../../contexts/RadioPlayerManager';
import compareIChannels from '../../tools/IChannel/compareIChannels';
import useStaticChannelStream from './hooks/useStaticChannelStream';
import TAudioTitle from '../../types/TAudioTitle';
import getTitle from '../../tools/IRadioHearthStreamData/getTitle';

function ChannelPage({ className, channel }: IChannelPageProps) {
  const cover = getImageUrl(channel.attributes.cover);
  const { status, channel: current, stream: oldStream } = useContext(RadioPlayerContext);
  const isCurrentChannel = compareIChannels(channel, current); //Это активный канал

  //Нужен отдельный поток
  const isNeedNewStream =
    !isCurrentChannel || oldStream.status === 'stopped' || oldStream.status === 'error';

  const newStream = useStaticChannelStream(channel, isNeedNewStream);

  //Если нужен отдельный поток то тянем инфу из нового потока, если работает старый то тянем из старого
  const _stream = !isNeedNewStream ? oldStream : newStream;

  const isError = _stream.status === 'error' || status === 'error';

  const title: TAudioTitle | null = getTitle(_stream.data);

  return (
    <DefaultLayout.Layout
      className={cn(s.ChannelPage, className)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DSection.Wrapper className={cn(s.wrapper)}>
        <DSection.Preview.Wrapper cover={cover} className={cn(s.previewContainer)}>
          <DefaultLayout.PageTitle className={cn(s.title)}>
            {channel.attributes.title}
          </DefaultLayout.PageTitle>
          <DSection.Preview.Inner className={cn(s.player)}>
            <ChannelPlayer
              channel={channel}
              title={title}
              isError={isError}
              isCurrentChannel={isCurrentChannel}
            />
          </DSection.Preview.Inner>
        </DSection.Preview.Wrapper>
        <DSection.Content.Wrapper>
          <DSection.Content.Container colorType={1} className={cn(s.description)} title="Описание">
            <ReactMarkdown>{channel.attributes.description}</ReactMarkdown>
          </DSection.Content.Container>
          <DSection.Content.Container title="Программы" colorType={2}>
            <DSection.Content.Slider.Wrapper className={cn(s.slider)}>
              {channel.attributes.programs.data?.map((rp: IRadioProgramm) => (
                <DSection.Content.Slider.Slide key={`radio-program-${rp.id}`}>
                  <RadioProgramm rp={rp} />
                </DSection.Content.Slider.Slide>
              ))}
            </DSection.Content.Slider.Wrapper>
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
