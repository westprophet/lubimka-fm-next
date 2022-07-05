/**
 * Created by westp on 22.04.2022
 */

import React from 'react';
import s from './PartnersSection.module.scss';
import cn from 'classnames';
import SectionSlider from '../../../../layouts/DefaultLayout/components/SectionSliderWrapper';
import { IPartner } from 'interfaces/IPartner';
import Partner from 'components/Partner';

export default function PartnersSection({ partners }: IPartnersSectionProps) {
  return (
    <SectionSlider.Wrapper className={cn(s.PartnersSection)} title="Партнеры">
      {partners?.map((p: IPartner) => {
        return (
          <SectionSlider.Slide key={`partner-${p.id}`}>
            <Partner p={p} />
          </SectionSlider.Slide>
        );
      })}
    </SectionSlider.Wrapper>
  );
}

interface IPartnersSectionProps {
  partners?: IPartner[];
}
