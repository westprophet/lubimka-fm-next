/**
 * Created by westp on 08.07.2022
 */

import React from 'react';
import s from './ClubMapMarker.module.scss';
import cn from 'classnames';
import { IClub } from 'interfaces/IClub';
import { getImageUrl } from '@tools/IWrappedStrapiImage';
import MapMarker from 'components/UI/MapMarker';
import Link from 'next/link';

export default function ClubMapMarker({ className, club, isDestination }: IClubMapMarkerProps) {
  const cover = getImageUrl(club.attributes.avatar ?? club.attributes.cover, 'small');
  if (!isDestination) {
    const lat = club.attributes.coords.lat;
    const lng = club.attributes.coords.lng;
    return (
      <a
        className={cn(s.ClubMapMarker, className)}
        href={`https://www.google.com/maps/dir/?api=1&destination=${lat}, ${lng}`}
        target={'_blank'}
        rel="noreferrer"
      >
        <MapMarker cover={cover} title={club.attributes.title} />
      </a>
    );
  } else {
    const id = club.id;
    return (
      <Link className={cn(s.ClubMapMarker, className)} href={`/club-life/clubs/${id}/`}>
        <MapMarker cover={cover} title={club.attributes.title} />
      </Link>
    );
  }
}

ClubMapMarker.defaultProps = {
  className: '',
  destination: false,
};

interface IClubMapMarkerProps {
  className?: string;
  club: IClub;
  isDestination?: boolean;
}
