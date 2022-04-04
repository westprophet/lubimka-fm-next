/**
 * Created by westp on 31.03.2022
 */

import React from 'react';
import s from './AuthorComponent.module.scss';
import cn from 'classnames';
import NoCover from 'assets/no-photo-heath.svg';
import IStrapiImage from '../../../interfaces/IStrapiImage';
import Image from 'next/image';
import NoImage from 'components/UI/NoImage';
import PlayButton from 'components/UI/buttons/PlayButton';

export default function AuthorComponent({ className, cover, sm, md, lg }: IAuthorComponentProps) {
  let url = NoCover;
  if (cover) url = typeof cover === 'string' ? cover : cover.url;

  return (
    <div
      className={cn(s.AuthorComponent, className, {
        sm: sm,
        md: md,
        lg: lg,
      })}
    >
      <div className={cn(s.inner)}>
        {cover ? (
          <Image src={url} className={cn(s.cover, 'zoom-effect')} layout="fill" />
        ) : (
          <NoImage className={cn(s.cover, 'zoom-effect')} />
        )}
        <div className={cn(s.front)}>
          <PlayButton className={cn(s.button)} onClick={() => {}} status="paused" type={2} />
        </div>
      </div>
      <div>Исполнитель</div>
    </div>
  );
}

AuthorComponent.defaultProps = {
  className: '',
  xs: true,
  sm: true,
  md: true,
  lg: true,
};

interface IAuthorComponentProps {
  className?: string;
  cover?: IStrapiImage | string;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}
