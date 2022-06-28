/**
 * Created by westp on 28.06.2022
 */

import React from 'react';
import s from '../../SmallMemberComponent.module.scss';
import cn from 'classnames';
import { Skeleton } from '@mui/material';

export default function SmallMemberSkeleton({ className }: ISmallMemberSkeletonProps) {
  return (
    <div className={cn(s.SmallMemberComponent, className)}>
      <Skeleton animation="wave" variant="circular" className={cn(s.avatar)} />
      <div className={cn(s.name)}>
        <Skeleton animation="wave" height={10} width="100%" />
        <Skeleton animation="wave" height={10} width="70%" />
      </div>
    </div>
  );
}

SmallMemberSkeleton.defaultProps = {
  className: '',
};

interface ISmallMemberSkeletonProps {
  className?: string;
}
