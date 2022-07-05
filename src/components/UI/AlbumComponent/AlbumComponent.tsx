/**
 * Created by westp on 05.06.2022
 */

import React from 'react';
import s from './AlbumComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import PlayButton from 'components/UI/buttons/PlayButton';

export default function AlbumComponent({
  className,
  title,
  year,
  onClick,
  cover,
  hover,
}: IAlbumComponentDataProps) {
  const isNoImg = !cover;
  return (
    <div className={cn(s.AlbumComponent, { [s.hover]: hover }, className)}>
      <div className={cn(s.cover, 'cover', { [s.noImageContainer]: isNoImg })}>
        <div className={cn(s.front)}>
          <PlayButton status="paused" type={2} onClick={onClick} className={cn(s.play)} />
        </div>

        {!isNoImg ? (
          // @ts-ignore
          <Image
            src={cover}
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={DATA_FOR_BLUR}
          />
        ) : (
          <NoImage className={cn(s.noImg)} />
        )}
      </div>
      <div className={cn(s.description)}>
        <div className={cn(s.title)}>{title}</div>
        <div className={cn(s.year)}>{year}</div>
      </div>
    </div>
  );
}

AlbumComponent.defaultProps = {
  className: '',
  onClick: () => {},
  hover: false,
};

export interface IAlbumComponentProps {
  hover?: boolean;
  className?: string;
}
interface IAlbumComponentDataProps extends IAlbumComponentProps {
  title: string;
  year: string | number;
  cover: string | null;
  onClick(): any;
}
