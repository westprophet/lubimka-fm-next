/**
 * Created by westp on 27.04.2022
 */

import React from 'react';
import s from './ChannelsPage.module.scss';
import cn from 'classnames';
import { IChannel } from '../../interfaces';
import DefaultLayout from '../../layouts/DefaultLayout';
import ViewSection from './sections/ViewSection';
import CallbackSection from './sections/CallbackSection';

export default function ChannelsPage({ className, channels }: IChannelsPageProps) {
  return (
    <DefaultLayout.Layout className={cn(s.ChannelsPage, className)}>
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/">Каналы</DefaultLayout.PageTitle>
        <ViewSection channels={channels} />
        <CallbackSection />
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

ChannelsPage.defaultProps = {
  className: '',
};

interface IChannelsPageProps {
  className?: string;
  channels: IChannel[];
}
