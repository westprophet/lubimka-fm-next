/**
 * Created by westp on 20.03.2022
 */

import React from 'react';
import s from './scss/ChannelComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { TAudioManagerStatus } from '../../../types/TAudioManagerStatus';
import PlayerControlComponent from 'components/UI/buttons/PlayerControlComponent';
import Link from 'next/link';
import getStatusConst from '../../../tools/TAudioManagerStatus/getStatusConst';

export default function ChannelComponent({
  className,
  title,
  id,
  cover,
  isActive,
  onPlayClick,
  status,
  isError,
  isDetail,
  typeSize,
  disabled,
  resizable,
}: IChannelDataProps) {
  const { isError: isErrorStatus } = getStatusConst(status);
  const _isError = Boolean(isError || (isActive && isErrorStatus));
  return (
    <div
      className={cn(
        s.Channel,
        { [s.active]: isActive },
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
            status={!isActive ? 'paused' : status}
            disable={disabled}
            isError={_isError}
          />
        </div>
        <Link href={`/channels/${id}`}>
          <a>
            <h4 className={s.title} suppressHydrationWarning>
              {title}
            </h4>
          </a>
        </Link>
        <h5 className="status">{!disabled ? 'Online' : 'Offline'}</h5>
      </div>
      {cover ? <Image className={s.cover} src={cover} layout="fill" objectFit="cover" /> : null}
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

export interface IChannelProps {
  disabled?: boolean;
  className?: string;
  typeSize?: 'small';
  resizable?: boolean;
  isDetail?: boolean;
}

interface IChannelDataProps extends IChannelProps {
  id: string | number;
  title: string;
  cover: string | null | undefined;
  onPlayClick(): any;
  isNew?: boolean;
  isError?: boolean;
  isActive?: boolean;
  status: TAudioManagerStatus;
}
