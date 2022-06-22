/**
 * Created by westp on 22.04.2022
 */

import React from 'react';
import s from './MemberComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import NoImage from 'components/UI/NoImage';
// @ts-ignore
import Marquee from 'react-double-marquee';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';

export default function MemberComponent({
  className,
  title,
  subtitle,
  cover,
}: IPartnerComponentProps) {
  const name = title.split(' ', 2);
  return (
    <div className={cn(s.MemberComponent, className)}>
      <div className={cn(s.inner)}>
        {cover ? (
          <Image
            className={cn(s.cover)}
            src={cover}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={DATA_FOR_BLUR}
          />
        ) : (
          <NoImage className={cn(s.cover)} />
        )}
      </div>
      <h3>
        {name[0]}
        <br />
        {name[1]}
      </h3>
      <h4>{subtitle}</h4>
    </div>
  );
}

MemberComponent.defaultProps = {
  className: '',
};

interface IPartnerComponentProps {
  className?: string;
  title: string;
  subtitle: string;
  cover?: string | null;
}
