/**
 * Created by westprophet on 11.05.2022
 */

import React from 'react';
import s from './Event.module.scss';
import cn from 'classnames';
import EventComponent, { IEventComponentProps } from 'components/UI/EventComponent';
import { IEvent } from '../../interfaces';
import { getImageUrl } from '../../tools/IWrappedStrapiImage';
import moment from 'moment';

// import useCompareDate from '../../hooks/useCompareDate';

export default function Event(p: IEventProps) {
  const cover = getImageUrl(p.event.attributes.preview);
  const start = moment(p.event.attributes.startDate),
    end = moment(p.event.attributes.endDate);

  let date = start.format('DD MMMM HH:mm');

  const isTwoDate = p.event.attributes.startDate && p.event.attributes.endDate; // Это диапазон
  const isNotBroke = start.isBefore(end);
  const isNowDay = start.isSame(moment(), 'day');

  if (isTwoDate && isNotBroke) {
    const isOneDay = start.isSame(end, 'day'); //В один и тот же день
    if (isOneDay) {
      if (isNowDay) date = `${start.format('Cегодня в HH:mm')} - ${end.format('HH:mm')}`;
      else date = `${start.format('DD MMMM HH:mm')} - ${end.format('HH:mm')}`;
    } else date = `${start.format('DD MMMM HH:mm')} - ${end.format('DD MMMM HH:mm')}`;
  } else if (isNowDay) date = start.format('Cегодня в HH:mm');

  return (
    <EventComponent
      className={cn(s.Event, p.className)}
      cover={cover}
      address={p.event.attributes.address}
      date={date}
      title={p.event.attributes.title}
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
