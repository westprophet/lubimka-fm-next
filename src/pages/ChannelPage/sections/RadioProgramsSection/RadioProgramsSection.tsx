/**
 * Created by westp on 03.05.2022
 */

import React from 'react';
import s from './RadioProgramsSection.module.scss';
import cn from 'classnames';
import SliderSector from '../../../../layouts/DefaultLayout/components/DoubleSection/components/ContentSection/components/SliderSector';
import { IRadioProgramm } from '../../../../interfaces';
import RadioProgramm from 'components/RadioProgramm';

export default function RadioProgramsSection({ className, programs }: IRadioProgramsSectionProps) {
  return (
    <SliderSector.Wrapper className={cn(s.RadioProgramsSection, className)}>
      {programs?.map((rp: IRadioProgramm) => (
        <SliderSector.Slide key={`radio-program-${rp.id}`}>
          <RadioProgramm rp={rp} />
        </SliderSector.Slide>
      ))}
    </SliderSector.Wrapper>
  );
}

RadioProgramsSection.defaultProps = {
  className: '',
};

interface IRadioProgramsSectionProps {
  className?: string;
  programs: IRadioProgramm[];
}
