/**
 * Created by westp on 23.04.2022
 */

import React from 'react';
import s from './TeamSection.module.scss';
import cn from 'classnames';
import SectionSlider from '../../../../layouts/DefaultLayout/components/SectionSliderWrapper';
import { ITeamMember } from '../../../../interfaces';
import TeamMember from 'components/TeamMember';

export default function TeamSection({ className, team }: ITeamSectionProps) {
  return (
    <SectionSlider.Wrapper className={cn(s.TeamSection, className)} title="Наша Команда">
      {team?.map((m: ITeamMember) => (
        <SectionSlider.Slide key={`team-member-${m.id}`}>
          <TeamMember member={m} />
        </SectionSlider.Slide>
      ))}
    </SectionSlider.Wrapper>
  );
}

TeamSection.defaultProps = {
  className: '',
};

interface ITeamSectionProps {
  className?: string;
  team: ITeamMember[];
}
