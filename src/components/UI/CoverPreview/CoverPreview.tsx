/**
 * Created by westp on 17.03.2022
 */

import React from 'react';
import s from './CoverPreview.module.scss';
import cn from 'classnames';
import IStrapiImage from 'src/interfaces/IStrapiImage';
import Image from 'next/image';
import logo from 'assets/logo.svg';
import useSizeByType from 'components/UI/CoverPreview/hooks/useSizeByType';
import TType from './types/TType';
import { CircularProgress } from '@mui/material';

export default function CoverPreview({ className, image, type, isLoading }: ICoverPreviewProps) {
  const isAdaptive = type === 'adaptive';
  let url = logo;
  if (image) url = typeof image === 'string' ? image : image.url;
  const size = useSizeByType(type);
  const settings = !isAdaptive ? size : { layout: 'fill' }; //Если адаптивний размер то делаем
  return (
    <div className={cn(s.CoverPreview, { [s.adaptive]: isAdaptive }, className)}>
      {isLoading ? (
        <CircularProgress color={'primary'} className={cn(s.loader)} />
      ) : (
        // @ts-ignore
        <Image src={url} {...settings} />
      )}
    </div>
  );
}

CoverPreview.defaultProps = {
  className: '',
  type: 'adaptive',
  isLoading: false,
};

interface ICoverPreviewProps {
  className?: string;
  isLoading: boolean;
  image: IStrapiImage | string;
  type?: TType;
}
