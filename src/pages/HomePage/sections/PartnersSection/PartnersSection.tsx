/**
 * Created by westp on 22.04.2022
 */

import React from 'react';
import s from './PartnersSection.module.scss';
import cn from 'classnames';
import SectionSlider, {
  MSlideAnimationVariants,
} from '../../../../layouts/DefaultLayout/components/SectionSliderWrapper';
import { IPartner } from '../../../../interfaces';
import Partner from 'components/Partner';

export default function PartnersSection({ partners }: IPartnersSectionProps) {
  return (
    <SectionSlider.Wrapper className={cn(s.PartnersSection)} title="Партнеры" link={`/partners`}>
      {partners?.map((p: IPartner, index: number) => {
        return (
          <SectionSlider.Slide
            key={`partner-${p.id}`}
            // variants={MSlideAnimationVariants}
            // custom={index}
            // whileInView="visible"
            // initial="hidden"
          >
            <Partner p={p} />
          </SectionSlider.Slide>
        );
      })}
    </SectionSlider.Wrapper>
  );
}

// PartnersSection.defaultProps = {
//   partners: '',
// };

interface IPartnersSectionProps {
  partners?: IPartner[];
}
