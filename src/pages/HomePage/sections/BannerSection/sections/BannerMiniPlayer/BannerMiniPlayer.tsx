/**
 * Created by westp on 07.04.2022
 */

import React, { useContext } from 'react';
import s from './BannerMiniPlayer.module.scss';
import cn from 'classnames';
import BigPlayButton from '../../components/BigPlayButton';
import { RadioPlayerContext } from '../../../../../../contexts/RadioPlayerManager';
import BannerPlayerArrow from './components/BannerPlayerArrow';

//Плеер в баннере
export default function BannerMiniPlayer({ className }: IBannerMiniPlayerProps) {
  const { status, toggle, setPrev, setNext } = useContext(RadioPlayerContext);
  return (
    <div className={cn(s.BannerMiniPlayer, className)}>
      <BannerPlayerArrow status={status} side="left" onClick={setPrev} />
      <BigPlayButton onClick={() => toggle()} status={status} />
      <BannerPlayerArrow side="right" status={status} onClick={setNext} />
    </div>
  );
}

BannerMiniPlayer.defaultProps = {
  className: '',
};

interface IBannerMiniPlayerProps {
  className?: string;
}
