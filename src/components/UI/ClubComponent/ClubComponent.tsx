/**
 * Created by westp on 12.04.2022
 */

import React from 'react';
import s from './ClubComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import Marquee from 'react-double-marquee';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import PlaceIcon from '@mui/icons-material/Place';

export default function ClubComponent({
  className,
  title,
  cover,
  address,
  size,
  avatar,
  isLongType,
}: IClubComponentProps) {
  return (
    <div
      className={cn(
        s.ClubComponent,
        { [s.small]: size === 'small', [s.middle]: size === 'middle', [s.large]: size === 'large' },
        { [s.longType]: isLongType },
        className
      )}
    >
      {cover ? (
        <Image
          className={cn(s.bg, 'zoom-effect')}
          src={cover}
          layout="fill"
          objectFit="cover"
          blurDataURL={DATA_FOR_BLUR}
          placeholder={'blur'}
        />
      ) : (
        <div className={cn(s.bg)} />
      )}

      <div className={cn(s.head)}>
        <div className={cn(s.avatar)}>
          {cover ? (
            <Image
              className={cn(s.ava, 'zoom-effect')}
              src={cover}
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <NoImage className={cn(s.no, 'zoom-effect')} />
          )}
        </div>
        <div className={cn(s.schedule)}>
          <div className={cn(s.scheduleItem)}>Пн с 10:00 до 03:00</div>
          <div className={cn(s.scheduleItem)}>Пн с 10:00 до 03:00</div>
        </div>
      </div>
      <div className={cn(s.body)}>
        <h3>
          <Marquee speed={0.02} direction="left" scrollWhen={'overflow'} delay={3000}>
            {title}
          </Marquee>
        </h3>

        <div className={cn(s.addressContainer)}>
          <PlaceIcon fontSize="large" />
          <div className={cn(s.address)}>
            <Marquee speed={0.02} direction="left" scrollWhen={'overflow'} delay={7000}>
              {address ?? 'Город, улица, номер  в две строки город, улица, номер в две строки'}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

ClubComponent.defaultProps = {
  className: '',
  size: 'small',
  isLongType: false,
};

export type TSizes = 'small' | 'middle' | 'large';

interface IClubComponentProps {
  className?: string;
  title: string;
  address: string;
  cover: string;
  avatar: string;
  isLongType?: boolean;
  size?: TSizes;
}
