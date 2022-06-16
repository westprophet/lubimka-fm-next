/**
 * Created by westp on 15.06.2022
 */

import React from 'react';
import s from './BroadcastNow.module.scss';
import cn from 'classnames';
import TAudioTitle from 'types/TAudioTitle';
import DotsLoader from 'components/DotsLoader';

export default function BroadcastNow({ className, title, isLoading }: IBroadcastNowProps) {
  return (
    <div className={cn(s.BroadcastNow, className)}>
      {!isLoading ? (
        <>
          <div className={cn(s.name)}>{title?.title}</div>
          <div className={cn(s.artist)}>{title?.artist}</div>
        </>
      ) : (
        <DotsLoader className={cn(s.loading)} />
      )}
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
