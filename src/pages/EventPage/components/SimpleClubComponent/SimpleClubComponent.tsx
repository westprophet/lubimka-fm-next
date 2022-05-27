/**
 * Created by westp on 27.05.2022
 */

import React from 'react';
import s from './SimpleClubComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../../constants/DATA_FOR_BLUR';
import { IClub, ISocial } from '../../../../interfaces';
import getImageUrl from '../../../../tools/IWrappedStrapiImage/getImageUrl';
import NoImage from 'components/UI/NoImage';
import Link from 'next/link';

export default function SimpleClubComponent({ className, club }: ISimpleClubComponentProps) {
  if (!club) return null;
  const { cover, title, Socials } = club.attributes;
  const _cover = getImageUrl(cover);
  return (
    <div className={cn(s.SimpleClubComponent, className)}>
      <div className={cn(s.cover)}>
        {_cover ? (
          <Image
            src={_cover}
            layout="fill"
            placeholder="blur"
            blurDataURL={DATA_FOR_BLUR}
            objectFit="cover"
            quality={50}
          />
        ) : (
          <NoImage />
        )}
      </div>
      <div className={cn(s.title)}>
        <Link href={`/club-life/clubs/${club.id}/`}>
          <a>{title}</a>
        </Link>
      </div>
      {Socials && (
        <ul className={cn(s.socials)}>
          {Socials.map((s: ISocial) => {
            return (
              <li key={s.title}>
                <a target="__blank" href={s.url}>
                  {s.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

SimpleClubComponent.defaultProps = {
  className: '',
};

interface ISimpleClubComponentProps {
  className?: string;
  club: IClub;
}
