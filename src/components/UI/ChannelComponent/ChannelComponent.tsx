/**
 * Created by westp on 20.03.2022
 */

import React, { useRef } from 'react';
import s from './scss/ChannelComponent.module.scss';
import cn from 'classnames';
import IChannel from '../../../interfaces/IChannel';

import Image from 'next/image';
import IStrapiImage from '../../../api/strapi/types/IStrapiImage';
import { TAudioManagerStatus } from '../../../types/TAudioManagerStatus';
import PlayerControlComponent from 'components/UI/buttons/PlayerControlComponent';
import TextPlaceholder from 'components/UI/TextPlaceholder';
import Link from 'next/link';
import getStatusConst from '../../../tools/TAudioManagerStatus/getStatusConst';

export default function ChannelComponent({
  className,
  channel,
  isCurrent,
  isNew,
  onPlayClick,
  status,
  isError,
  isDetail,
  typeSize,
  disabled,
  resizable,
}: IChannelProps) {
  const { isError: isErrorStatus } = getStatusConst(status);
  const _isError = Boolean(isError || (isCurrent && isErrorStatus));

  const img: IStrapiImage | undefined = channel.attributes.cover?.data.attributes;
  if (!channel) return null;
  return (
    <div
      className={cn(
        s.Channel,
        { [s.active]: isCurrent },
        { [s.error]: _isError },
        { disabled: disabled },
        { [s.small]: typeSize === 'small' },
        { [s.notResizable]: resizable },
        className
      )}
    >
      <div className={s.description}>
        <div className={s.control}>
          <PlayerControlComponent
            onClick={onPlayClick}
            status={!isCurrent ? 'paused' : status}
            disable={disabled}
            isError={_isError}
          />
        </div>

        <TextPlaceholder
          placeholder="Подробнее"
          side="right"
          placeholderArrow
          className={s.title}
          isEnable={isDetail || _isError}
        >
          <Link href={`/channels/${channel.id}`}>
            <a>
              <h4>{channel.attributes.title}</h4>
            </a>
          </Link>
        </TextPlaceholder>
        <h5 className="status">{!disabled ? 'Online' : 'Offline'}</h5>
      </div>
      {!img || !img.url ? null : (
        <Image className={s.cover} src={img.url} layout="fill" objectFit="cover" />
      )}
    </div>
  );
}

ChannelComponent.defaultProps = {
  className: '',
  active: false,
  isNew: false,
  disabled: false,
  isDetail: true,
  resizable: false,
};

interface IChannelProps {
  channel: IChannel;

  onPlayClick(): any;

  status: TAudioManagerStatus;
  disabled?: boolean;
  className?: string;
  typeSize?: 'small';
  isNew?: boolean;
  isError?: boolean;
  isCurrent?: boolean;
  resizable?: boolean;
  isDetail?: boolean;
}
