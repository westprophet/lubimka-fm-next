/**
 * Created by westp on 08.07.2022
 */

import React from 'react';
import s from './ClubMapMarker.module.scss';
import cn from 'classnames';
import { IClub } from 'interfaces/IClub';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../constants/DATA_FOR_BLUR';
import { getImageUrl } from '@tools/IWrappedStrapiImage';

export default function ClubMapMarker({ className, club, lat, lng }: IClubMapMarkerProps) {
  const cover = getImageUrl(club.attributes.avatar ?? club.attributes.cover, 'small');
  return (
    <a
      className={cn(s.ClubMapMarker, className)}
      href={`https://www.google.com/maps/dir/?api=1&destination=${lat}, ${lng}`}
      target={'_blank'}
      rel="noreferrer"
    >
      {cover && (
        <div className={cn(s.cover)}>
          <Image
            src={cover}
            layout="responsive"
            objectFit="cover"
            width="100%"
            height="100%"
            blurDataURL={DATA_FOR_BLUR}
            placeholder="blur"
          />
        </div>
      )}
      <div>{club.attributes.title}</div>
    </a>
  );
}

ClubMapMarker.defaultProps = {
  className: '',
};

interface IClubMapMarkerProps {
  className?: string;
  lat: string;
  lng: string;
  club: IClub;
}
