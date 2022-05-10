/**
 * Created by westp on 27.04.2022
 */

import React from 'react';
import s from './ChannelsPage.module.scss';
import cn from 'classnames';
import { IChannel } from '../../interfaces';
import DefaultLayout from '../../layouts/DefaultLayout';
import CallbackSection from './sections/CallbackSection';
import Channel from 'components/Channel';

export default function ChannelsPage({ className, channels }: IChannelsPageProps) {
  return (
    <DefaultLayout.Layout className={cn(s.ChannelsPage, className)}>
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/">Каналы</DefaultLayout.PageTitle>
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner disableHorizontalPadding className={cn(s.viewSection)}>
            {channels.map((c: IChannel) => (
              <Channel key={`channel-${c.id}`} channel={c} resizable />
            ))}
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
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
