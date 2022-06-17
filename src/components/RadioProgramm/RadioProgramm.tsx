/**
 * Created by westp on 29.04.2022
 */

import React from 'react';
import s from './RadioProgramm.module.scss';
import cn from 'classnames';

import RadioProgrammComponent from 'components/UI/RadioProgrammComponent';

import { IRadioProgram } from '../../interfaces';
import { getImageUrl } from '../../tools/IWrappedStrapiImage';
import { IDaySchedule } from 'interfaces/IRadioProgram';

export default function RadioProgramm({ className, rp, disableSchedule }: IRadioProgramProps) {
  const _cover: string | null = getImageUrl(rp.attributes.cover);
  const _schedule: string[] = rp.attributes.DaySchedule?.map((ds: IDaySchedule) => ds.title);
  return (
    <RadioProgrammComponent
      className={cn(s.RadioProgramm, className)}
      cover={_cover}
      link={`/radio-programs/${rp.id}/`}
      schedule={!disableSchedule ? _schedule : null}
      subtitle={rp.attributes.subtitle}
      title={rp.attributes.title}
    />
  );
}

RadioProgramm.defaultProps = {
  className: '',
};

interface IRadioProgramProps {
  className?: string;
  disableSchedule?: boolean;
  rp: IRadioProgram;
}
