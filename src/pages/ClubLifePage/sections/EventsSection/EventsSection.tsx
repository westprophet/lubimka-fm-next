/**
 * Created by westp on 25.05.2022
 */

import React from 'react';
import s from './EventsSection.module.scss';
import cn from 'classnames';
import { IEvent } from '../../../../interfaces';

export default function EventsSection({ events }: IEventsSectionProps) {
  return (
    <div className={cn(s.EventsSection)}>
      <div></div>
    </div>
  );
}

interface IEventsSectionProps {
  events: IEvent[];
}
