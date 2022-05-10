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
      <Section.Wrapper className={cn(s.ViewSection, className)}>
        {events.map((e: IEvent, i: number) => (
          <div key={`event-${e.id}-${i}`}>{e.attributes.title}</div>
          // <Club  club={c} resizable />
        ))}
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
