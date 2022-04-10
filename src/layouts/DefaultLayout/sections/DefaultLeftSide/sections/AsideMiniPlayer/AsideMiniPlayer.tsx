/**
 * Created by westprophet on 10.04.2022
 */

import React, { useContext } from 'react';
import s from './AsideMiniPlayer.module.scss';
import cn from 'classnames';
import PlayIconButton from 'components/UI/buttons/PlayIconButton';
import { RadioPlayerContext } from '../../../../../../contexts/RadioPlayerManager';

//Миниплеер для бокового меню
export default function AsideMiniPlayer({ className }: IAsideMiniPlayerProps) {
  const { status, toggle } = useContext(RadioPlayerContext);
  return (
    <div className={cn(s.AsideMiniPlayer, className)}>
      <PlayIconButton onClick={toggle} status={status} />
    </div>
  );
}

AsideMiniPlayer.defaultProps = {
  className: '',
};

interface IAsideMiniPlayerProps {
  className?: string;
}
