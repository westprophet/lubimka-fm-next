/**
 * Created by westprophet on 11.05.2022
 */

import React from 'react';
import s from './Event.module.scss';
import cn from 'classnames';
import EventComponent, { IEventComponentProps } from 'components/UI/EventComponent';
import { IEvent } from '../../interfaces';
import { getImageUrl } from '../../tools/IWrappedStrapiImage';
import useGetEventDate from 'src/hooks/others/useGetEventDate';

export default function Event(p: IEventProps) {
  const cover = getImageUrl(p.event.attributes.preview, 'thumbnail');
  const date = useGetEventDate(p.event.attributes.startDate, p.event.attributes.endDate);

  return (
    <EventComponent
      className={cn(s.Event, p.className)}
      cover={cover}
      address={p.event.attributes.address}
      date={date}
      title={p.event.attributes.title}
      link={`/club-life/events/${p.event.id}/`}
      resizable={p.resizable}
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
