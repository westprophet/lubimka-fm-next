/**
 * Created by westprophet on 13.02.2022
 */

import React, { useContext } from 'react';
import { RadioPlayerContext } from '../../../contexts/RadioPlayerManager';
import s from './CommonPlayer.module.scss';
import cn from 'classnames';

import IRadioHearthStreamDataMount from '../../../api/radioheathAPI/types/IRadioHearthStreamDataMount';
import splitTrackName from '../../../tools/IRadioHearthStreamDataMount/splitTrackName';
import CommonPlayerTitle from './components/CommonPlayerTitle';
import TAudioTitle from '../../../types/TAudioTitle';
import useImageState from './hooks/useImageState';
import rTools from '../../../api/radioheathAPI/tools';
import CommonPlayerCover from './components/CommonPlayerCover';
import CommonPlayerControls from 'components/UI/CommonPlayer/components/CommonPlayerControls';

export default function CommonPlayer({ className }: ICommonPlayerProps) {
  const { data, status, play, stop } = useContext(RadioPlayerContext);
  const _data: IRadioHearthStreamDataMount | null = rTools.getMount(data); //Получаем более точные данные
  const title: TAudioTitle = splitTrackName(_data); //Разделяем имя и название трека
  const { image, isLoading } = useImageState(title); // Запрашиваем картинку для трека
  return (
    <div className={cn(s.CommonPlayer, 'with-screen-padding', s.fixed, className)}>
      <CommonPlayerCover image={image} isLoading={isLoading} />
      <CommonPlayerControls status={status} play={play} stop={stop} />
      {/*<CommonPlayerTitle className={cn(s.controls)} ft={title} />*/}
      {/*<div className={cn(s.title)}></div>*/}
      <div className={cn(s.actions)}></div>
    </div>
  );
}

CommonPlayer.defaultProps = {
  className: '',
};

interface ICommonPlayerProps {
  className?: string;
}
