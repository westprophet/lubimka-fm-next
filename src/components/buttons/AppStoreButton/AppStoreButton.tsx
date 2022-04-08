/**
 * Created by westp on 08.04.2022
 */

import React from 'react';
import s from './AppStoreButton.module.scss';
import cn from 'classnames';

export default function AppStoreButton({ className }: IAppStoreButtonProps) {
  return (
    <div className={cn(s.AppStoreButton, className)}>
      <div></div>
    </div>
  );
}

AppStoreButton.defaultProps = {
  className: '',
};

interface IAppStoreButtonProps {
  className?: string;
}
