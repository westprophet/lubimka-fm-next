/**
 * Created by westp on 29.04.2022
 */

import React from 'react';
import s from './RadioProgramm.module.scss';
import cn from 'classnames';

import RadioProgrammComponent, {
  TRadioProgrammSizes,
  TRadioProgrammType,
} from 'components/UI/RadioProgrammComponent';

import { IRadioProgramm } from '../../interfaces';
import { getImageUrl } from '../../tools/IWrappedStrapiImage';
import { IDaySchedule } from '../../interfaces/IRadioProgramm';

export default function RadioProgramm({ className, size, sizes, rp }: IRadioProgrammProps) {
  const _cover: string | null = getImageUrl(rp.attributes.cover);
  const _schedule: string[] = rp.attributes.DaySchedule?.map((ds: IDaySchedule) => ds.title);
  return (
    <RadioProgrammComponent
      className={cn(s.RadioProgramm, className)}
      cover={_cover}
      schedule={_schedule}
      subtitle={rp.attributes.subtitle}
      title={rp.attributes.title}
      size={size}
      sizes={sizes}
    />
  );
}

RadioProgramm.defaultProps = {
  className: '',
};

interface IRadioProgrammProps {
  className?: string;
  rp: IRadioProgramm;
  size?: TRadioProgrammType | null;
  sizes?: TRadioProgrammSizes;
}
