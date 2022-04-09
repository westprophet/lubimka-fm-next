/**
 * Created by westp on 08.04.2022
 */

import React from 'react';
import s from './AppStoreButton.module.scss';
import cn from 'classnames';
import GetApplicationButton from 'components/buttons/GetApplicationButton';

export default function AppStoreButton({ className }: IAppStoreButtonProps) {
  return <GetApplicationButton className={cn(s.AppStoreButton, className)} type="app-store" />;
}

AppStoreButton.defaultProps = {
  className: '',
};

interface IAppStoreButtonProps {
  className?: string;
}
