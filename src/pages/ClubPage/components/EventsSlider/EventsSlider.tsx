/**
 * Created by westp on 26.05.2022
 */

import React from 'react';
import s from './EventsSlider.module.scss';
import cn from 'classnames';
import SliderSector from '../../../../layouts/DefaultLayout/components/DoubleSection/components/ContentSection/components/SliderSector';
import { IEvent } from '../../../../interfaces';
import Event from 'components/Event';

export default function EventsSlider({ className, events }: IEventsSliderProps) {
  if (!events) return null;
  return (
    <SliderSector.Wrapper className={cn(s.EventsSlider, className)}>
      {events?.map((e: IEvent) => (
        <SliderSector.Slide key={`event-${e.id}`} className={cn(s.slide)}>
          <Event event={e} />
        </SliderSector.Slide>
      ))}
    </SliderSector.Wrapper>
  );
}

EventsSlider.defaultProps = {
  className: '',
};

interface IEventsSliderProps {
  className?: string;
  events: IEvent[];
}
