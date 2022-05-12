/**
 * Created by westp on 10.05.2022
 */

import React from 'react';
import s from './ViewSection.module.scss';
import cn from 'classnames';
import { IEvent } from '../../../../interfaces';
// import Club from 'components/Club';
import { SectionWrapper as Section } from '../../../../layouts/DefaultLayout/components';
import isEmptyArray from '../../../../utils/isEmptyArray';
import DefaultLayout from '../../../../layouts/DefaultLayout';
import Event from 'components/Event';

export default function ViewSection({ className, events }: IViewSectionProps) {
  const isEmpty = isEmptyArray(events);
  if (isEmpty)
    return (
      <DefaultLayout.Section.Inner>
        <h2>По данному запросу ничего не найдено</h2>
      </DefaultLayout.Section.Inner>
    );
  else
    return (
      <Section.Wrapper>
        <Section.Inner className={cn(s.ViewSection, className)} disableHorizontalPadding>
          {events.map((e: IEvent, i: number) => (
            <Event event={e} key={`event-${e.id}-${i}`} resizable />
          ))}
        </Section.Inner>
      </Section.Wrapper>
    );
}

ViewSection.defaultProps = {
  className: '',
};

interface IViewSectionProps {
  className?: string;
  events: IEvent[];
}
