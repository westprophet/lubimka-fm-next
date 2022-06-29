/**
 * Created by westp on 29.06.2022
 */

import React from 'react';
import s from './AlbumSceleton.module.scss';
import cn from 'classnames';

export default function AlbumSceleton({ className }: IAlbumSceletonProps) {
  return (
    <div className={cn(s.AlbumSceleton, className)}>
      <div></div>
    </div>
  );
}

AlbumSceleton.defaultProps = {
  className: '',
};

interface IAlbumSceletonProps {
  className?: string;
}
