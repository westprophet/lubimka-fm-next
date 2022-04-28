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
import TextPlaceholder from 'components/UI/TextPlaceholder';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
  const _size = useComponentSize<TChannelComponentType>(sizes);
  const r = useRouter();
  if (!channel) return null;
  const img: IStrapiImage | undefined = channel.attributes.cover?.data.attributes;
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
        <Link href={`/channels/${channel.id}`}>
          <a>
            <TextPlaceholder
              placeholder="Подробнее"
              // onClick={() => r.push(`/channels/${channel.id}`)}
              side="right"
              animation={false}
              // arrow
              placeholderArrow
              className={s.title}
            >
              <h4>{channel.attributes.title}</h4>
            </TextPlaceholder>
          </a>
        </Link>
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
