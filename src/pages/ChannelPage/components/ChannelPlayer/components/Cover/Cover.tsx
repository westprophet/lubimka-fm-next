/**
 * Created by westp on 02.05.2022
 */

import React from 'react';
import s from './Cover.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import useImageState from '../../../../../../hooks/useImageState';
import TAudioTitle from '../../../../../../types/TAudioTitle';
import DATA_FOR_BLUR from '../../../../../../constants/DATA_FOR_BLUR';

export default function Cover({ className, title }: ICoverProps) {
  const { image } = useImageState(title); // Запрашиваем картинку для трека
  const isNoImg = typeof image !== 'string';
  return (
    <div className={cn(s.Cover, { [s.noImg]: isNoImg }, className)}>
      {!isNoImg ? (
        <Image src={image} layout="fill" placeholder="blur" blurDataURL={DATA_FOR_BLUR} />
      ) : null}
    </div>
  );
}

Cover.defaultProps = {
  className: '',
};

interface ICoverProps {
  className?: string;
  title: TAudioTitle | null;
}
