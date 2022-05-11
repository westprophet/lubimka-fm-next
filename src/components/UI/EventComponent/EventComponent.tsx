/**
 * Created by westprophet on 11.05.2022
 */

import React from 'react';
import s from './EventComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';

export default function EventComponent({
  address,
  date,
  className,
  cover,
  title,
  resizable,
}: IEventComponent) {
  return (
    <div className={cn(s.EventComponent, { [s.resizable]: resizable }, className)}>
      {cover ? (
        <div className={cn(s.cover)}>
          <Image
            src={cover}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            blurDataURL={DATA_FOR_BLUR}
          />
        </div>
      ) : (
        <NoImage className={cn(s.cover)} />
      )}
      <div className={cn(s.desc)}>
        <div className={cn(s.title)}>{title}</div>
        <div className={cn(s.date)}>{date}</div>
        <div className={cn(s.address)}>{address}</div>
      </div>
    </div>
  );
}

EventComponent.defaultProps = {
  className: '',
  resizable: false,
};

export interface IEventComponentProps {
  resizable?: boolean;
}

interface IEventComponent extends IEventComponentProps {
  className?: string;
  cover?: string | null;
  title: string;
  date: string;
  address: string;
}
