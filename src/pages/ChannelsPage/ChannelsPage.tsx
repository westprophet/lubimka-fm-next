/**
 * Created by westp on 27.04.2022
 */

import React from 'react';
import s from './ChannelsPage.module.scss';
import cn from 'classnames';
import { IChannel } from '../../interfaces';
import DefaultLayout from '../../layouts/DefaultLayout';
import Channel from 'components/Channel';
import Section from 'layouts/DefaultLayout/components/SectionWrapper';
import AnyContactForm from 'components/forms/AnyContactForm';

export default function ChannelsPage({ channels }: IChannelsPageProps) {
  return (
    <DefaultLayout.Layout className={cn(s.ChannelsPage)}>
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle
          title="Каналы"
          breadcrumbs={[
            {
              title: 'Каналы',
            },
          ]}
        />
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner className={cn(s.viewSection)}>
            {channels.map((c: IChannel) => (
              <Channel key={`channel-${c.id}`} channel={c} resizable />
            ))}
          </DefaultLayout.Section.Inner>
        </DefaultLayout.Section.Wrapper>
        <Section.Wrapper className={cn(s.CallbackSection)}>
          <Section.Inner>
            <Section.Title>Есть идея для канала? Поделитесь с нами</Section.Title>
            <AnyContactForm type="suggest a new channel" />
          </Section.Inner>
        </Section.Wrapper>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

interface IChannelsPageProps {
  channels: IChannel[];
}
