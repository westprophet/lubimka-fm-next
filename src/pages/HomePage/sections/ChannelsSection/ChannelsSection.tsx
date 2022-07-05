/**
 * Created by westp on 21.04.2022
 */

import React from 'react';
import s from './ChannelsSection.module.scss';
import cn from 'classnames';
import SectionSlider from 'src/layouts/DefaultLayout/components/SectionSliderWrapper';
import Channel from 'components/Channel';
// import { ChannelManagerContext } from '../../../../contexts/ChannelManager';
import { IChannel } from 'interfaces/IChannel';

export default function ChannelsSection({ className, channels }: IChannelsSectionsProps) {
  // const cm = useContext(ChannelManagerContext);
  return (
    <SectionSlider.Wrapper
      className={cn(s.ChannelsSections, className)}
      title="Каналы"
      detail={{
        title: 'Все',
        link: '/channels',
      }}
      link="/channels"
    >
      {channels?.map((c: IChannel, index: number) => (
        <SectionSlider.Slide key={`channel-${c.id}`}>
          <Channel channel={c} />
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
  channels?: IChannel[];
}
