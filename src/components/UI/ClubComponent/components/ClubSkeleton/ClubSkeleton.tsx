/**
 * Created by westp on 25.07.2022
 */

import React from 'react';
import s from '../../ClubComponent.module.scss';
import cn from 'classnames';
import { Skeleton } from '@mui/material';
import { IClubComponentProps } from 'components/UI/ClubComponent/ClubComponent';

export default function ClubSkeleton({
  className,
  resizable,
  resizableHeight,
}: IClubSkeletonProps) {
  return (
    <div
      className={cn(s.ClubComponent, { [s.res]: resizable, [s.resH]: resizableHeight }, className)}
    >
      <Skeleton className={s.cover} variant="rectangular" />
      <div className={cn(s.head)}>
        <Skeleton animation="wave" variant="circular" className={cn(s.avatar)} />
        {/*<Skeleton width="40%" className={cn(s.schedule)} />*/}
      </div>
      <div className={cn(s.body)}>
        <Skeleton />
        <Skeleton width="70%" />
      </div>
    </div>
  );
}

ClubSkeleton.defaultProps = {
  className: '',
};

interface IClubSkeletonProps extends IClubComponentProps {
  className?: string;
}
