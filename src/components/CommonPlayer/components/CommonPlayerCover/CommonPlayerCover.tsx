/**
 * Created by westp on 18.03.2022
 */

import React from 'react';
import s from './CommonPlayerCover.module.scss';
import cn from 'classnames';
import CoverPreview from 'components/UI/CoverPreview';

import IStrapiImage from '../../../../interfaces/IStrapiImage';
import NoCover from './components/NoCover';

export default function CommonPlayerCover({
  className,
  isLoading,
  image,
}: ICommonPlayerCoverProps) {
  return (
    <div className={cn(s.CommonPlayerCover, className)}>
      {image ? (
        <CoverPreview className={cn(s.cover)} image={image} isLoading={isLoading} />
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
  isLoading: boolean;
  image: IStrapiImage | string;
}
