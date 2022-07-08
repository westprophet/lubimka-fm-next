/**
 * Created by westp on 27.05.2022
 */

import React from 'react';
import s from './MiniMap.module.scss';
import cn from 'classnames';
import GoogleMapReact from 'google-map-react';
import TCoords from 'types/TCoords';

// @ts-ignore
export default function MiniMap({ className, coords, children }: IMiniMapProps) {
  const key = process.env.isProd
    ? process.env.NEXT_PUBLIC_GOOGLE_MAP_API
    : process.env.NEXT_PUBLIC_GOOGLE_MAP_API_DEV;

  return (
    <div className={cn(s.MiniMap, className)}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: String(key) }}
        defaultCenter={coords}
        defaultZoom={10}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
}

MiniMap.defaultProps = {
  className: '',
};

interface IMiniMapProps {
  className?: string;
  children: any;
  coords: TCoords;
}
