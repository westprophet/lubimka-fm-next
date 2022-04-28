/**
 * Created by westp on 28.04.2022
 */

import React from 'react';
import s from './PreviewSection.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import DATA_FOR_BLUR from '../../../../../../constants/DATA_FOR_BLUR';

export default function PreviewSection({ className, children, cover }: IPreviewSectionProps) {
  return (
    <section className={cn(s.PreviewSection, className)}>
      {cover ? (
        <div className={cn(s.cover)}>
          <Image
            src={cover}
            layout="fill"
            objectFit="cover"
            alt="alt"
            placeholder="blur"
            blurDataURL={DATA_FOR_BLUR}
          />
        </div>
      ) : null}
      {children}
    </section>
  );
}

PreviewSection.defaultProps = {
  className: '',
};

interface IPreviewSectionProps {
  className?: string;
  children: any;
  cover: string | null;
}
