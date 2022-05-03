/**
 * Created by westp on 18.03.2022
 */

import React from 'react';
import s from './CommonPlayerCover.module.scss';
import cn from 'classnames';

import NoCover from './components/NoCover';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../../../constants/DATA_FOR_BLUR';

export default function CommonPlayerCover({ className, image }: ICommonPlayerCoverProps) {
  return (
    <div className={cn(s.CommonPlayerCover, className)}>
      {image ? (
        <Image
          src={image}
          className={cn(s.cover)}
          layout="fill"
          blurDataURL={DATA_FOR_BLUR}
          placeholder="blur"
        />
      ) : (
        <NoCover />
      )}
    </div>
  );
}

CommonPlayerCover.defaultProps = {
  className: '',
  isLoading: false,
};

interface ICommonPlayerCoverProps {
  className?: string;
  image: string | null | undefined;
}
