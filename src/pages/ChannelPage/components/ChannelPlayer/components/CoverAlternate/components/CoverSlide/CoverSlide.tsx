/**
 * Created by westp on 02.05.2022
 */

import React from 'react';
import s from './CoverSlide.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../../../../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';

export default function CoverSlide({ className, src, onLoad }: ICoverSlideProps) {
  if (!src) {
    return <NoImage className={cn(s.CoverSlide, className)} onLoad={onLoad} />;
  }
  return (
    <div className={cn(s.CoverSlide, className)}>
      <Image
        src={src}
        layout="fill"
        placeholder="blur"
        blurDataURL={DATA_FOR_BLUR}
        onLoadingComplete={onLoad}
      />
    </div>
  );
}

CoverSlide.defaultProps = {
  className: '',
  onLoad: () => {},
};

interface ICoverSlideProps {
  className?: string;
  src: string | null | undefined;
  onLoad(): any;
}
