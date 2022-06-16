/**
 * Created by westp on 16.06.2022
 */

// @ts-ignore
import React, { startTransition, useState } from 'react';
import s from './SimpleRadioProgramComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { DATA_FOR_BLUR_ALT } from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';

export default function SimpleRadioProgramComponent({
  className,
  cover,
}: ISimpleRadioProgramComponentProps) {
  const isNoImg = !cover;
  const [isLoadImage, setIsLoadImage] = useState<boolean>(false);
  return (
    <div className={cn(s.SimpleRadioProgramComponent, className)}>
      <div className={cn(s.cover, 'cover', { [s.noImageContainer]: isNoImg })}>
        {!isNoImg ? (
          <Image
            src={cover}
            layout="fill"
            placeholder="blur"
            blurDataURL={DATA_FOR_BLUR_ALT}
            loading="eager"
            onLoadingComplete={() => startTransition(() => setIsLoadImage(true))}
          />
        ) : (
          <NoImage className={cn(s.noImg)} />
        )}
      </div>
    </div>
  );
}

SimpleRadioProgramComponent.defaultProps = {
  className: '',
};

interface ISimpleRadioProgramComponentProps {
  className?: string;
  cover: string;
}
