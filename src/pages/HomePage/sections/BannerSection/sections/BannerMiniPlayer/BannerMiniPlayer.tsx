/**
 * Created by westp on 07.04.2022
 */

import React, { useContext } from 'react';
import s from './BannerMiniPlayer.module.scss';
import cn from 'classnames';
import BigPlayButton from '../../components/BigPlayButton';
import { RadioPlayerContext } from '../../../../../../contexts/RadioPlayerManager';
import { ChannelManagerContext } from 'src/contexts/ChannelManager';
import BannerPlayerArrow from './components/BannerPlayerArrow';
import ButtonSpectrum from '../../components/ButtonSpectrum';

export default function BannerMiniPlayer({ className }: IBannerMiniPlayerProps) {
  const { toggle, status } = useContext(RadioPlayerContext);
  const { prevChannel, nextChannel } = useContext(ChannelManagerContext);
  return (
    <div className={cn(s.BannerMiniPlayer, className)}>
      <BannerPlayerArrow status={status} side="left" onClick={prevChannel} />
      <BigPlayButton onClick={toggle} status={status} />
      <BannerPlayerArrow side="right" status={status} onClick={nextChannel} />
      {/*<ButtonSpectrum className={cn(s.spectrum)} />*/}
    </div>
  );
}

BannerMiniPlayer.defaultProps = {
  className: '',
};

interface IBannerMiniPlayerProps {
  className?: string;
}
