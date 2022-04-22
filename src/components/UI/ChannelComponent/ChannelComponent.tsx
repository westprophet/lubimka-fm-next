/**
 * Created by westp on 20.03.2022
 */

import React from 'react';
import s from './scss/ChannelComponent.module.scss';
import cn from 'classnames';
import IChannel from '../../../interfaces/IChannel';

import Image from 'next/image';
import IStrapiImage from '../../../interfaces/IStrapiImage';
import { TAudioManagerStatus } from '../../../types/TAudioManagerStatus';
import { TChannelComponentType } from '../../Channel/types';
import PlayerControlComponent from 'components/UI/buttons/PlayerControlComponent';
import useComponentSize from '../../../hooks/useComponentSize';
import TBreakpoints from '../../../types/TBreakpoints';

export default function ChannelComponent({
  className,
  channel,
  active,
  size,
  sizes,
  isNew,
  onPlay,
  onStop,
  status,
  disabled,
}: IChannelProps) {
  if (!channel) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const _size = useComponentSize<TChannelComponentType>(sizes);
  const img: IStrapiImage = channel.attributes.cover?.data.attributes;
  return (
    <div
      className={cn(
        s.Channel,
        size ?? _size,
        { active: active },
        { disabled: disabled },

        className
      )}
    >
      <div className="description">
        <div className="control">
          <PlayerControlComponent
            play={onPlay}
            stop={onStop}
            status={!active ? 'paused' : status}
            // type={2}
            disable={disabled}
            sizes={sizes}
            size={size}
          />
        </div>
        <h4 className="title">{channel.attributes.title}</h4>
        <h5 className="status">{!disabled ? 'Online' : 'Offline'}</h5>
      </div>
      {!img || !img.url ? null : (
        <Image className="cover" src={img.url} layout="fill" objectFit="cover" />
      )}
    </div>
  );
}

ChannelComponent.defaultProps = {
  className: '',
  active: false,
  isNew: false,
  disabled: false,
  // sizes: {
  //   xs: 'small',
  //   sm: 'small',
  //   md: 'middle',
  //   xl: 'large',
  // },
};

export interface IChannelProps {
  className?: string;
  channel: IChannel;
  active?: boolean;
  onPlay(): any;
  onStop(): any;
  status: TAudioManagerStatus;
  size?: TChannelComponentType | null;
  sizes?: Partial<TBreakpoints<TChannelComponentType>>;
  isNew?: boolean;
  disabled?: boolean;
}
