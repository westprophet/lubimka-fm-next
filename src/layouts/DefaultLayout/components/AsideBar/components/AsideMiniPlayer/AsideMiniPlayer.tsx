/**
 * Created by westprophet on 10.04.2022
 */

import React, { useContext } from 'react';
import s from './AsideMiniPlayer.module.scss';
import cn from 'classnames';
import PlayIconButton from 'components/UI/buttons/PlayIconButton';
import { RadioPlayerContext } from '../../../../../../contexts/RadioPlayerManager';

//Миниплеер для бокового меню
export default function AsideMiniPlayer({ className, show, type }: IAsideMiniPlayerProps) {
  const { status, toggle } = useContext(RadioPlayerContext);
  return (
    <div
      className={cn(
        s.AsideMiniPlayer,
        { [s.left]: type === 'left', [s.right]: type === 'right' },
        { [s.show]: show },
        className
      )}
    >
      <PlayIconButton onClick={toggle} status={status} />
    </div>
  );
}

AsideMiniPlayer.defaultProps = {
  className: '',
  show: false,
  type: 'right',
};

interface IAsideMiniPlayerProps {
  className?: string;
  show?: boolean;
  type: 'left' | 'right';
}
