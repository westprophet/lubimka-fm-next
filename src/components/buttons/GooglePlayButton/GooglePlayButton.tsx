/**
 * Created by westp on 09.04.2022
 */

import React from 'react';
import s from './GooglePlayButton.module.scss';
import cn from 'classnames';
import GetApplicationButton from 'components/buttons/GetApplicationButton';

export default function GooglePlayButton({ className }: IGooglePlayButtonProps) {
  return <GetApplicationButton className={cn(s.GooglePlayButton, className)} type="google-play" />;
}

GooglePlayButton.defaultProps = {
  className: '',
};

interface IGooglePlayButtonProps {
  className?: string;
}
