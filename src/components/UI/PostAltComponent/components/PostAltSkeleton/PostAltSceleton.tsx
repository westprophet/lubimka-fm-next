/**
 * Created by westp on 28.06.2022
 */

import React from 'react';
import s from '../../PostAltComponent.module.scss';
import cn from 'classnames';
import { IPostComponentProps } from 'components/UI/PostAltComponent';
import { Skeleton } from '@mui/material';
import SmallMemberSkeleton from '../../../SmallMemberComponent/component/SmallMemberSkeleton';

export default function PostAltSkeleton({ resizable, className }: IPostAltSkeletonProps) {
  return (
    <div className={cn(s.PostComponent, { [s.resizable]: resizable }, className)}>
      <Skeleton className={s.coverContainer} variant="rectangular" />
      <div className={cn(s.member)}>
        <SmallMemberSkeleton />
      </div>
      <div className={cn(s.inner)}>
        <Skeleton />
        <Skeleton width="70%" />
        <Skeleton width="40%" />
      </div>
    </div>
  );
}

interface IPostAltSkeletonProps extends IPostComponentProps {
  className?: string;
}
