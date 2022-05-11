/**
 * Created by westprophet on 11.05.2022
 */

import React from 'react';
import s from './Event.module.scss';
import cn from 'classnames';
import EventComponent, { IEventComponentProps } from 'components/UI/EventComponent';
import { IEvent } from '../../interfaces';
import { getImageUrl } from '../../tools/IWrappedStrapiImage';

export default function Event(p: IEventProps) {
  const cover = getImageUrl(p.event.attributes.preview);
  const date = p.event.attributes.startDate; //*****
  return (
    <EventComponent
      cover={cover}
      address={p.event.attributes.address}
      date={date}
      title={p.event.attributes.title}
      resizable={p.resizable}
      className={cn(s.Event, p.className)}
    />
  );
}

Event.defaultProps = {
  className: '',
};

interface IEventProps extends IEventComponentProps {
  className?: string;
  event: IEvent;
}
