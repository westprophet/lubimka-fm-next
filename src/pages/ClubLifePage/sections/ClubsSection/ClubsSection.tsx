/**
 * Created by westp on 25.05.2022
 */

import React from 'react';
import s from './ClubsSection.module.scss';
import cn from 'classnames';
import { SectionSliderWrapper as Section } from '../../../../layouts/DefaultLayout/components';
import Club from 'components/Club';
import { IClub } from '../../../../interfaces';

export default function ClubsSection({ className, clubs }: IClubsSectionProps) {
  return (
    <Section.Wrapper
      className={cn(s.ClubsSection, className)}
      title="Недавно добавленные"
      detail={{
        title: 'Все клубы',
        link: '/club-life/clubs',
      }}
    >
      {clubs?.map((c: IClub) => {
        return (
          <Section.MSlide key={`club-${c.id}`}>
            <Club club={c} />
          </Section.MSlide>
        );
      })}
    </Section.Wrapper>
  );
}

ClubsSection.defaultProps = {
  className: '',
};

interface IClubsSectionProps {
  className?: string;
  clubs: IClub[];
}
