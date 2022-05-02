/**
 * Created by westp on 04.04.2022
 */

import React from 'react';
import s from './NoImage.module.scss';
import cn from 'classnames';
import { CircularProgress } from '@mui/material';
// import logo from 'assets/logo.svg';
export default function NoImage({ className, isLoading, onLoad }: INoImageProps) {
  return (
    <div className={cn(s.NoImage, className)}>
      {isLoading ? (
        <CircularProgress className={cn(s.loader)} />
      ) : (
        <img src="/logo.svg" alt="no image logo lubimka" onLoad={onLoad} />
      )}
    </div>
  );
}

NoImage.defaultProps = {
  className: '',
  onLoad: () => {},
};

interface INoImageProps {
  className?: string;
  isLoading?: boolean;
  onLoad?(): any;
}
