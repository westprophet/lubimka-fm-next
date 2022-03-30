/**
 * Created by westp on 20.03.2022
 */

import React from 'react';
import s from './ChannelComponent.module.scss';
import cn from 'classnames';
import IChannel from '../../../interfaces/IChannel';

import Image from 'next/image';
import IStrapiImage from '../../../interfaces/IStrapiImage';
import { TAudioManagerStatus } from '../../../types/TAudioManagerStatus';
import { TChannelComponentType } from './types';
import PlayerControlComponent from 'components/UI/PlayerControlComponent';

export default function ChannelComponent({
  className,
  channel,
  active,
  type,
  isNew,
  onPlay,
  onStop,
  status,
  disabled,
}: IChannelProps) {
  if (!channel) return null;
  const img: IStrapiImage = channel.attributes.cover?.data.attributes;
  return (
    <div
      className={cn(
        s.Channel,
        {
          [s.sm]: type === 'sm',
          [s.md]: type === 'md',
          [s.lg]: type === 'lg',
        },
        { [s.active]: active },
        { [s.disabled]: disabled },
        className
      )}
    >
      <div className={cn(s.description)}>
        <div className={cn(s.control)}>
          <PlayerControlComponent
            play={onPlay}
            stop={onStop}
            status={!active ? 'paused' : status}
            type={2}
            disable={disabled}
          />
        </div>
        <div className={cn(s.title)}>{channel.attributes.title}</div>
        <div className={cn(s.status)}>{!disabled ? 'Online' : 'Offline'}</div>
      </div>
      {!img || !img.url ? null : (
        <Image className={cn(s.cover)} src={img.url} layout="fill" objectFit="cover" />
      )}
    </div>
  );
}

ChannelComponent.defaultProps = {
  className: '',
  type: 'adaptive',
  active: false,
  isNew: false,
  disabled: false,
};

export interface IChannelProps {
  className?: string;
  channel: IChannel;
  active?: boolean;
  onPlay(): any;
  onStop(): any;
  status: TAudioManagerStatus;
  type?: TChannelComponentType;
  isNew?: boolean;
  disabled?: boolean;
}
