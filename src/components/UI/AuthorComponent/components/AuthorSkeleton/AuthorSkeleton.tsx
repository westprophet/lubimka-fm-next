/**
 * Created by westp on 29.06.2022
 */

import React from 'react';
import s from '../../AuthorComponent.module.scss';
import cn from 'classnames';
import { IAuthorComponentProps } from 'components/UI/AuthorComponent';
import { Skeleton } from '@mui/material';

export default function AuthorSkeleton({ className, resizable }: IAuthorSkeletonProps) {
  return (
    <div className={cn(s.AuthorComponent, { [s.resizable]: resizable }, className)}>
      <div className={cn(s.inner)}>
        <Skeleton className={s.cover} variant="rectangular" />
        <div className={cn(s.front)}>
          <Skeleton animation="wave" variant="circular" className={cn(s.button)} />
        </div>
      </div>
      <h3>
        <Skeleton animation="wave" height={10} width="70%" />
      </h3>
    </div>
  );
}

AuthorSkeleton.defaultProps = {
  className: '',
};

interface IAuthorSkeletonProps extends IAuthorComponentProps {
  className?: string;
}
