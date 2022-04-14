/**
 * Created by westp on 12.04.2022
 */

import React from 'react';
import s from './ClubLifeSection.module.scss';
import cn from 'classnames';
import SectionSlider from '../../../../layouts/DefaultLayout/components/SectionSliderWrapper';
import { IClub } from '../../../../interfaces';
import Club from 'components/Club';

export default function ClubLifeSection({ clubs }: IClubLifeSectionProps) {
  return (
    <SectionSlider.Wrapper className={cn(s.ClubLifeSection)} title="Club Life">
      {clubs?.map((club: IClub) => {
        return (
          <SectionSlider.Slide key={`events-${club.id}`}>
            <Club club={club} />
          </SectionSlider.Slide>
        );
      })}
    </SectionSlider.Wrapper>
  );
}

ClubLifeSection.defaultProps = {
  className: '',
};

interface IClubLifeSectionProps {
  clubs: IClub[];
}
