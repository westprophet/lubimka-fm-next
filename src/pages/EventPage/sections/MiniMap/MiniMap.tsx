/**
 * Created by westp on 27.05.2022
 */

import React from 'react';
import s from './MiniMap.module.scss';
import cn from 'classnames';
import GoogleMapReact from 'google-map-react';

// @ts-ignore
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MiniMap({ className }: IMiniMapProps) {
  const key = process.env.isProd
    ? process.env.NEXT_PUBLIC_GOOGLE_MAP_API
    : process.env.NEXT_PUBLIC_GOOGLE_MAP_API_DEV;

  // const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_DEV;

  return (
    <div className={cn(s.MiniMap, className)}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: String(key) }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={9}
      >
        {/*// @ts-ignore*/}
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

MiniMap.defaultProps = {
  className: '',
};

interface IMiniMapProps {
  className?: string;
}
