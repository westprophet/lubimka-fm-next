/**
 * Created by westp on 30.05.2022
 */

import React from 'react';
import s from './NewTrackSection.module.scss';
import cn from 'classnames';
import { SectionContainer as Container } from 'layouts/DefaultLayout/components/DoubleSection/components/QuadContentSection/';

export default function NewTrackSection({ className }: INewTrackSectionProps) {
  return (
    <Container className={cn(s.NewTrackSection, className)} title="Новый сингл" colorType={1}>
      <div> 1 sdfdsfdsfsdsda</div>
    </Container>
  );
}

NewTrackSection.defaultProps = {
  className: '',
};

interface INewTrackSectionProps {
  className?: string;
}
