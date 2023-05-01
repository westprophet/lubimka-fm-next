/**
 * Created by westp on 12.04.2022
 */

import React from 'react';
import s from './ClubLifeSection.module.scss';
import cn from 'classnames';
import SectionSlider from '../../../../layouts/DefaultLayout/components/SectionSliderWrapper';
import { IClub } from 'interfaces/IClub';
import Club from 'components/Club';
import { IEvent } from 'interfaces/IEvent';
import Event from 'components/Event';
import isEmptyArray from 'utils/isEmptyArray';

export default function ClubLifeSection({ clubs, events }: IClubLifeSectionProps) {
  return (
    <>
      <SectionSlider.Wrapper
        infinite
        autoplay
        className={cn(s.ClubLifeSection)}
        title="Club Life"
        id="club-life"
        detail={{
          title: 'Клубы рядом',
          link: '/club-life/clubs-nearby',
        }}
      >
        {clubs?.map((club: IClub) => {
          return (
            <SectionSlider.Slide key={`club-${club.id}`}>
              <Club club={club} />
            </SectionSlider.Slide>
          );
        })}
      </SectionSlider.Wrapper>
      {!isEmptyArray(events) ? (
        <SectionSlider.Wrapper className={cn(s.EventSection)} infinite autoplay>
          {events?.map((event: IEvent) => {
            return (
              <SectionSlider.Slide key={`event-${event.id}`}>
                <Event event={event} />
              </SectionSlider.Slide>
            );
          })}
        </SectionSlider.Wrapper>
      ) : null}
    </>
  );
}

interface IClubLifeSectionProps {
  clubs: IClub[];
  events: IEvent[];
}
