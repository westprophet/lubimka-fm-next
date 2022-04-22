/**
 * Created by westp on 21.04.2022
 */

import React, { useContext } from 'react';
import s from './ChannelsSection.module.scss';
import cn from 'classnames';
import SectionSlider from 'src/layouts/DefaultLayout/components/SectionSliderWrapper';
import Channel from 'components/Channel';
import { ChannelManagerContext } from '../../../../contexts/ChannelManager';
import { IChannel } from '../../../../interfaces';

export default function ChannelsSection({ className }: IChannelsSectionsProps) {
  const cm = useContext(ChannelManagerContext);
  return (
    <SectionSlider.Wrapper className={cn(s.ChannelsSections, className)} title="Каналы">
      {cm.channels.map((c: IChannel) => (
        <SectionSlider.Slide key={`channel-${c.id}`}>
          <Channel channel={c} type="lg" />
        </SectionSlider.Slide>
      ))}
    </SectionSlider.Wrapper>
  );
}

ChannelsSection.defaultProps = {
  className: '',
};

interface IChannelsSectionsProps {
  className?: string;
}
