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

export default function ChannelPage({ className, channel }: IChannelPageProps) {
  const cover = getImageUrl(channel.attributes.cover);
  return (
    <DefaultLayout.Layout
      className={cn(s.ChannelPage, className)}
      header={{
        alwaysShow: true,
        fixed: false,
        alwaysTransparent: true,
      }}
    >
      <DSection.Wrapper>
        <DSection.Preview cover={cover}>
          <DefaultLayout.PageTitle>Каналы</DefaultLayout.PageTitle>
        </DSection.Preview>
        <DSection.Content.Wrapper>
          <DSection.Content.Container colorType={1} className={cn(s.description)} title="Описание">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat non libero
            congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat
            non libero congue.
          </DSection.Content.Container>
          <DSection.Content.Container title="Программы" colorType={2}>
            asds
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
