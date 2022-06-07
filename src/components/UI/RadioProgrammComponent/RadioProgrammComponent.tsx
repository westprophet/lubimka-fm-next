/**
 * Created by westp on 29.04.2022
 */

import React from 'react';
import s from './RadioProgrammComponent.module.scss';
import cn from 'classnames';

import Image from 'next/image';

import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';

import TRadioProgrammType, { TRadioProgrammSizes } from './types/TRadioProgrammType';

import NoImage from 'components/UI/NoImage';

// @ts-ignore
import Marquee from 'react-double-marquee';

import useComponentSize from '../../../hooks/useComponentSize';

//Компонент отображения радиопрограммы
export default function RadioProgrammComponent({
  className,
  title,
  subtitle,
  schedule,
  cover,
  sizes,
}: IRadioProgrammComponentProps) {
  const _size = useComponentSize<TRadioProgrammType>(sizes);
  return (
    <div className={cn(s.RadioProgrammComponent, _size, className)}>
      {cover ? (
        <div className={cn(s.cover)}>
          <Image
            src={cover}
            layout="fill"
            objectFit="cover"
            blurDataURL={DATA_FOR_BLUR}
            placeholder="blur"
          />
        </div>
      ) : (
        <NoImage className={cn(s.cover)} />
      )}
      <div className={cn(s.desc)}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        {schedule && (
          <ul>
            {schedule.map((s: string) => (
              <li key={s}>
                <Marquee direction="left" scrollWhen="overflow" speed={0.01}>
                  {s}
                </Marquee>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

RadioProgrammComponent.defaultProps = {
  className: '',
  sizes: {
    xs: 'small',
    xxxl: 'small',
  },
};

interface IRadioProgrammComponentProps {
  className?: string;
  title: string;
  cover: string | null;
  subtitle: string;
  schedule: string[] | null;
  size?: TRadioProgrammType | null;
  sizes?: TRadioProgrammSizes;
}
