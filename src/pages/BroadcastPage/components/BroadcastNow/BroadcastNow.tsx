/**
 * Created by westp on 15.06.2022
 */

import React from 'react';
import s from './BroadcastNow.module.scss';
import cn from 'classnames';
import TAudioTitle from 'types/TAudioTitle';
import DotsLoader from 'components/DotsLoader';

export default function BroadcastNow({ className, title, isLoading }: IBroadcastNowProps) {
  if (isLoading) return <DotsLoader className={cn(s.loading)} />;
  return (
    <div className={cn(s.BroadcastNow, className)}>
      <div className={cn(s.name)}>{title?.title}</div>
      <div className={cn(s.artist)}>{title?.artist}</div>
    </div>
  );
}

BroadcastNow.defaultProps = {
  className: '',
  isLoading: false,
};

interface IBroadcastNowProps {
  className?: string;
  title: TAudioTitle | null;
  isLoading?: boolean;
}
