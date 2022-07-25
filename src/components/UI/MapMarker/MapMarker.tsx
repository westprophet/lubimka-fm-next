/**
 * Created by westp on 25.07.2022
 */

import React from 'react';
import s from './MapMarker.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';

export default function MapMarker({ className, cover, title, onClick }: IMapMarkerProps) {
  const onClickHandler = () => {
    if (onClick) onClick();
  };
  return (
    <div className={cn(s.MapMarker, className)} onClick={onClickHandler}>
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
      <div>{title}</div>
    </div>
  );
}

MapMarker.defaultProps = {
  className: '',
};

interface IMapMarkerProps {
  className?: string;
  title: string;
  cover?: string | null;
  onClick?(): any;
}
