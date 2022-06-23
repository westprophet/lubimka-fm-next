/**
 * Created by westp on 12.04.2022
 */

import React from 'react';
import s from './ClubComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
// @ts-ignore
import Marquee from 'react-double-marquee';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import PlaceIcon from '@mui/icons-material/Place';
import Link from 'next/link';
import useHover from 'hooks/useHover';
import IconString from 'components/UI/others/IconString';

export default function ClubComponent({
  className,
  title,
  cover,
  address,
  link,
  resizable,
}: IClubComponentProps) {
  const { onMouseOverHandler, onMouseLeaveHandler, hover } = useHover();
  return (
    <div
      className={cn(s.ClubComponent, { [s.notResizable]: resizable }, className)}
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
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
        <Link href={link}>
          <h3>
            {hover ? (
              <Marquee speed={0.02} direction="left" scrollWhen={'overflow'} delay={100}>
                {title}
              </Marquee>
            ) : (
              title
            )}
          </h3>
        </Link>
        <IconString
          inline={hover}
          icon={<PlaceIcon />}
          className={cn(s.addressContainer)}
          delay={100}
        >
          {address}
        </IconString>
      </div>
    </div>
  );
}

ClubComponent.defaultProps = {
  className: '',
  size: 'small',
  isLongType: false,
  resizable: false,
};

export type TSizes = 'small' | 'middle' | 'large';

interface IClubComponentProps {
  className?: string;
  title: string;
  link: string;
  address: string;
  cover: string | null;
  avatar?: string | null;
  isLongType?: boolean;
  resizable?: boolean;
}
