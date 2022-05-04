/**
 * Created by westp on 12.04.2022
 */

import React from 'react';
import s from './ClubLifeSection.module.scss';
import cn from 'classnames';
import SectionSlider, {
  MSlideAnimationVariants,
} from '../../../../layouts/DefaultLayout/components/SectionSliderWrapper';
import { IClub } from '../../../../interfaces';
import Club from 'components/Club';

export default function ClubLifeSection({ clubs }: IClubLifeSectionProps) {
  return (
    <SectionSlider.Wrapper className={cn(s.ClubLifeSection)} title="Club Life">
      {clubs?.map((club: IClub, index: number) => {
        return (
          <SectionSlider.MSlide
            key={`club-${club.id}`}
            variants={MSlideAnimationVariants}
            custom={index}
            whileInView="visible"
            initial="hidden"
          >
            <Club club={club} />
          </SectionSlider.MSlide>
        );
      })}
    </SectionSlider.Wrapper>
  );
}

// ClubLifeSection.defaultProps = {
//   className: '',
// };

interface IClubLifeSectionProps {
  clubs: IClub[];
}
