/**
 * Created by westp on 08.07.2022
 */

import React from 'react';
import s from './ClubMapMarker.module.scss';
import cn from 'classnames';

export default function ClubMapMarker({ className, lat, lng }: IClubMapMarkerProps) {
  return (
    <div className={cn(s.ClubMapMarker, className)}>
      <div>My Markeddr</div>
    </div>
  );
}

ClubMapMarker.defaultProps = {
  className: '',
};

interface IClubMapMarkerProps {
  className?: string;
  lat: number;
  lng: number;
}
