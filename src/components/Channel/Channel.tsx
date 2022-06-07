/**
 * Created by westp on 22.03.2022
 */

import React, { useContext } from 'react';
import ChannelComponent, { IChannelProps } from 'components/UI/ChannelComponent';
import IChannel from '../../interfaces/IChannel';
import { RadioPlayerContext } from '../../contexts/RadioPlayerManager';
import { compareIChannels } from 'src/tools/IChannel';
import IStrapiImage from '../../api/strapi/types/IStrapiImage';
import { getImageUrl } from '@tools/IWrappedStrapiImage';

//Компонент канала
export default function Channel({ className, channel, typeSize, resizable }: ISimpleChannelProps) {
  const { status, set, channel: current }: any = useContext(RadioPlayerContext);
  const isActive = compareIChannels(current, channel);
  const title = channel.attributes.title;
  const cover: IStrapiImage | string | null = getImageUrl(channel.attributes.cover);

  return (
    <ChannelComponent
      id={channel.id}
      className={className}
      title={title}
      cover={cover}
      isActive={isActive}
      onPlayClick={() => set(channel, true)}
      status={status}
      typeSize={typeSize}
      resizable={resizable}
    />
  );
}

interface ISimpleChannelProps extends IChannelProps {
  channel: IChannel;
}
