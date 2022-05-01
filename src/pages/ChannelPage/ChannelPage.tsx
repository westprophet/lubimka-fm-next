/**
 * Created by westp on 27.04.2022
 */

import React from 'react';
import s from './ChannelPage.module.scss';
import cn from 'classnames';
import { IChannel, IRadioProgramm } from '../../interfaces';

import DefaultLayout from '../../layouts/DefaultLayout';
import DSection from '../../layouts/DefaultLayout/components/DoubleSection';
import { getImageUrl } from '../../tools/IWrappedStrapiImage';
import ReactMarkdown from 'react-markdown';
import RadioProgramm from 'components/RadioProgramm';
import ChannelPlayer from './components/ChannelPlayer';

export default function ChannelPage({ className, channel }: IChannelPageProps) {
  const cover = getImageUrl(channel.attributes.cover);

  return (
    <DefaultLayout.Layout
      className={cn(s.ChannelPage, className)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
      // right={{ isShowPlayer: true }}
    >
      <DSection.Wrapper>
        <DSection.Preview.Wrapper cover={cover} className={cn(s.previewContainer)}>
          <DefaultLayout.PageTitle className={cn(s.title)}>О канале </DefaultLayout.PageTitle>
          <DSection.Preview.Inner className={cn(s.player)}>
            <ChannelPlayer channel={channel} />
          </DSection.Preview.Inner>
        </DSection.Preview.Wrapper>
        <DSection.Content.Wrapper>
          <DSection.Content.Container colorType={1} className={cn(s.description)} title="Описание">
            <ReactMarkdown>{channel.attributes.description}</ReactMarkdown>
          </DSection.Content.Container>
          <DSection.Content.Container title="Программы" colorType={2}>
            <DSection.Content.Slider.Wrapper className={cn(s.slider)}>
              {channel.attributes.programs.data?.map((rp: IRadioProgramm) => (
                <DSection.Content.Slider.Slide
                  key={`radio-program-${rp.id}`}
                  // className={cn(s.slide)}
                >
                  <RadioProgramm rp={rp} />
                </DSection.Content.Slider.Slide>
              ))}
            </DSection.Content.Slider.Wrapper>
          </DSection.Content.Container>
          <DSection.Content.Container title="Новинки" colorType={3}>
            asd
          </DSection.Content.Container>
        </DSection.Content.Wrapper>
      </DSection.Wrapper>
    </DefaultLayout.Layout>
  );
}

ChannelPage.defaultProps = {
  className: '',
};

interface IChannelPageProps {
  className?: string;
  channel: IChannel;
}
