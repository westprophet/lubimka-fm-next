/**
 * Created by westp on 02.05.2022
 */

import React, { useState } from 'react';
import s from './CoverAlternate.module.scss';
import cn from 'classnames';

import TAudioTitle from '../../../../../../types/TAudioTitle';
import CoverSlide from './components/CoverSlide';

import usePrevious from '../../../../../../hooks/usePrevious';
import useImageState from 'src/hooks/useImageState';
// import useTestImage from './hooks/useTestImage';

export default function CoverAlternate({ className, title }: ICoverAlternateProps) {
  const { image, isLoading } = useImageState(title); // Запрашиваем картинку для трека
  // const { _image: image, _loading: isLoading } = useTestImage();

  const previous = usePrevious<string | null | undefined>(image);
  const isNew = image != previous;

  return (
    <div className={cn(s.CoverAlternateContainer, className)}>
      <div className={cn(s.inner, { [s.anim]: isNew && !isLoading })}>
        <CoverSlide className={cn(s.new)} src={previous} />
        <CoverSlide className={cn(s.prev)} src={title ? image : previous} />
      </div>
    </div>
  );
}

CoverAlternate.defaultProps = {
  className: '',
};

interface ICoverAlternateProps {
  className?: string;
  title: TAudioTitle | null;
}
