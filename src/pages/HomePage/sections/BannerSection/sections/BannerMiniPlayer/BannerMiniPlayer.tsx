/**
 * Created by westp on 07.04.2022
 */

import React, { useContext } from 'react';
import s from './BannerMiniPlayer.module.scss';
import cn from 'classnames';
import BigPlayButton from '../../components/BigPlayButton';
import { RadioPlayerContext } from '../../../../../../contexts/RadioPlayerManager';
import ArrowButton from 'components/UI/buttons/ArrowButton';
import { ChannelManagerContext } from 'src/contexts/ChannelManager';

export default function BannerMiniPlayer({ className }: IBannerMiniPlayerProps) {
  const { toggle, status } = useContext(RadioPlayerContext);
  const { prevChannel, nextChannel } = useContext(ChannelManagerContext);
  return (
    <div className={cn(s.BannerMiniPlayer, className)}>
      <ArrowButton className={cn(s.arrow)} side="left" onClick={prevChannel} />
      <BigPlayButton onClick={toggle} status={status} />
      <ArrowButton className={cn(s.arrow)} side="right" onClick={nextChannel} />
    </div>
  );
}

BannerMiniPlayer.defaultProps = {
  className: '',
};

interface IBannerMiniPlayerProps {
  className?: string;
}
