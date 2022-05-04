/**
 * Created by westp on 21.04.2022
 */

import React from 'react';
import s from './ChannelsSection.module.scss';
import cn from 'classnames';
import SectionSlider, {
  MSlideAnimationVariants,
} from 'src/layouts/DefaultLayout/components/SectionSliderWrapper';
import Channel from 'components/Channel';
// import { ChannelManagerContext } from '../../../../contexts/ChannelManager';
import { IChannel } from '../../../../interfaces';

export default function ChannelsSection({ className, channels }: IChannelsSectionsProps) {
  // const cm = useContext(ChannelManagerContext);
  return (
    <SectionSlider.Wrapper
      className={cn(s.ChannelsSections, className)}
      title="Каналы"
      // placeholder="Подробнее"
      link="/channels"
    >
      {channels?.map((c: IChannel, index: number) => (
        <SectionSlider.MSlide
          key={`channel-${c.id}`}
          variants={MSlideAnimationVariants}
          custom={index}
          whileInView="visible"
          initial="hidden"
        >
          <Channel channel={c} type="lg" />
        </SectionSlider.MSlide>
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
